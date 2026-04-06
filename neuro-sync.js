function renderNeuroSync() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2 style="font-weight: 800; letter-spacing: -0.02em;">Nöro-Zaman Haritası</h2>
                <p class="text-muted" style="max-width: 600px;">Zinciri Kırma metodolojisiyle disiplinini bu organik haritaya işle. Her gün tamamladığın hedef, büyük ağın parlamasını sağlar.</p>
            </div>
            <div class="d-segment-control" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
                <button class="d-seg-btn" style="color: #ccc;" onclick="prevNeuroMonth()">&laquo; Önce</button>
                <div id="neuro-month-display" style="padding: 6px 16px; color: white; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Ayar Ayı</div>
                <button class="d-seg-btn" style="color: #ccc;" onclick="nextNeuroMonth()">Sonra &raquo;</button>
            </div>
        </div>
        
        <div class="stat-card" style="min-height: 550px; padding: 0; position: relative;">
            <div id="neuro-voronoi-container" style="width: 100%; height: 550px; display: flex; justify-content: center; align-items: center; position: relative; border-radius: inherit; overflow: hidden;">
                <!-- D3 SVG injected here -->
            </div>
        </div>
        
        <!-- Legend -->
        <div style="display: flex; gap: 20px; margin-top: 20px; justify-content: center; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: rgba(16,185,129,0.8); box-shadow: 0 0 10px rgba(16,185,129,0.5);"></div> <span style="font-size: 0.9rem; color: #ddd;">Hedef Aşıldı (Başarı)</span></div>
            <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: rgba(168,85,247,0.8); box-shadow: 0 0 10px rgba(168,85,247,0.5);"></div> <span style="font-size: 0.9rem; color: #ddd;">Operasyon / Ar-Ge</span></div>
            <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: rgba(239,68,68,0.8); box-shadow: 0 0 10px rgba(239,68,68,0.5);"></div> <span style="font-size: 0.9rem; color: #ddd;">Kesinti / Eksik</span></div>
            <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1);"></div> <span style="font-size: 0.9rem; color: #ddd;">Nötr / Beklemede</span></div>
        </div>

        <!-- Color Picker Modal -->
        <div id="neuroModal" class="sidebar-overlay" style="display: none; align-items: center; justify-content: center; z-index: 9999;">
            <div class="card" style="width: 320px; padding: 30px; border-radius: 24px; box-shadow: 0 24px 50px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1);">
                <h3 id="neuroModalDate" style="text-align: center; margin-bottom: 24px; font-weight: 800; font-size: 1.2rem; color: white;">GÜN</h3>
                <input type="hidden" id="neuroSelectedDay" />
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <button class="btn" style="background: rgba(16,185,129,0.15); color: #10B981; border: 1px solid rgba(16,185,129,0.3); border-radius: 12px; padding: 14px; font-weight: 600; text-align: left;" onclick="setNeuroColor('rgba(16,185,129,0.7)', 'Başarılı')">🟢 Hedef Aşıldı (Zirve)</button>
                    <button class="btn" style="background: rgba(168,85,247,0.15); color: #B39DFF; border: 1px solid rgba(168,85,247,0.3); border-radius: 12px; padding: 14px; font-weight: 600; text-align: left;" onclick="setNeuroColor('rgba(168,85,247,0.7)', 'Ar-Ge')">🟣 Derin Operasyon</button>
                    <button class="btn" style="background: rgba(239,68,68,0.15); color: #EF4444; border: 1px solid rgba(239,68,68,0.3); border-radius: 12px; padding: 14px; font-weight: 600; text-align: left;" onclick="setNeuroColor('rgba(239,68,68,0.7)', 'Eksik')">🔴 Kesinti / Eksiklik</button>
                    <button class="btn" style="background: rgba(255,255,255,0.03); color: #aaa; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 14px; font-weight: 600; text-align: left; margin-top: 8px;" onclick="setNeuroColor('clear', '')">⚪ Temizle (Nötr)</button>
                </div>
                <button class="btn" style="width: 100%; margin-top: 20px; border-radius: 12px; background: transparent; color: #888;" onclick="document.getElementById('neuroModal').style.display='none'">İptal ve Kapat</button>
            </div>
        </div>
    `;
}

let currentNeuroMonth = new Date().getMonth();
let currentNeuroYear = new Date().getFullYear();

function prevNeuroMonth() {
    currentNeuroMonth--;
    if (currentNeuroMonth < 0) {
        currentNeuroMonth = 11;
        currentNeuroYear--;
    }
    initNeuroSyncD3();
}

function nextNeuroMonth() {
    currentNeuroMonth++;
    if (currentNeuroMonth > 11) {
        currentNeuroMonth = 0;
        currentNeuroYear++;
    }
    initNeuroSyncD3();
}

// Generate an organic seed per month so it always draws the SAME cells for the SAME month
function seededRandom(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function initNeuroSyncD3() {
    const container = document.getElementById('neuro-voronoi-container');
    if (!container) return;
    
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    document.getElementById('neuro-month-display').innerText = `${months[currentNeuroMonth]} ${currentNeuroYear}`;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;
    
    container.innerHTML = ''; 

    const daysInMonth = new Date(currentNeuroYear, currentNeuroMonth + 1, 0).getDate();
    
    if (!AppData.productivityMap) AppData.productivityMap = {};
    if (!AppData.productivityMap[currentNeuroYear]) AppData.productivityMap[currentNeuroYear] = {};
    if (!AppData.productivityMap[currentNeuroYear][currentNeuroMonth]) AppData.productivityMap[currentNeuroYear][currentNeuroMonth] = {};

    const monthData = AppData.productivityMap[currentNeuroYear][currentNeuroMonth];

    // Create a seed based on the month and year
    let seed = currentNeuroYear * 100 + currentNeuroMonth;
    
    // Generate organic pseudo-random points within a padded area
    const pad = 40;
    let points = Array.from({length: daysInMonth}, (_, i) => [
        pad + seededRandom(seed + i * 1) * (width - pad * 2), 
        pad + seededRandom(seed + i * 2) * (height - pad * 2)
    ]);

    // Lloyd's relaxation for aesthetic cell distribution (more uniform organic look)
    for (let i = 0; i < 5; i++) {
        const delaunay = d3.Delaunay.from(points);
        const voronoi = delaunay.voronoi([0, 0, width, height]);
        points = points.map((p, j) => {
            const polygon = voronoi.cellPolygon(j);
            return polygon ? d3.polygonCentroid(polygon) : p;
        });
    }

    const finalDelaunay = d3.Delaunay.from(points);
    const finalVoronoi = finalDelaunay.voronoi([10, 10, width - 10, height - 10]);

    const svg = d3.select('#neuro-voronoi-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('overflow', 'hidden')
        .style('border-radius', '24px'); // Inherits card radius

    // Create a drop shadow filter for glowing
    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "glow");
    filter.append("feGaussianBlur").attr("stdDeviation", "8").attr("result", "coloredBlur");
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Cells
    svg.append('g')
        .selectAll('path')
        .data(points)
        .join('path')
        .attr('d', (d, i) => finalVoronoi.renderCell(i))
        .attr('fill', (d, i) => {
            const day = i + 1;
            return monthData[day] ? monthData[day].color : 'rgba(255,255,255,0.02)';
        })
        .attr('stroke', 'rgba(255,255,255,0.1)')
        .attr('stroke-width', 2)
        .style('cursor', 'pointer')
        .style('transition', 'all 0.3s ease')
        .style('filter', (d, i) => {
            const day = i + 1;
            return monthData[day] ? 'url(#glow)' : 'none';
        })
        .on('mouseover', function(e, d) {
            d3.select(this)
              .attr('stroke', 'var(--accent)')
              .attr('stroke-width', 3)
              .raise(); // brought to front
        })
        .on('mouseout', function(e, d) {
            d3.select(this)
              .attr('stroke', 'rgba(255,255,255,0.1)')
              .attr('stroke-width', 2);
        })
        .on('click', (e, d) => {
            const index = points.indexOf(d);
            const day = index + 1;
            openNeuroModal(day);
        });

    // Bring text to front separately from paths
    svg.append('g')
        .selectAll('text')
        .data(points)
        .join('text')
        .attr('x', d => d[0])
        .attr('y', d => d[1])
        .text((d, i) => i + 1)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', (d, i) => {
            const day = i + 1;
            return monthData[day] ? '#fff' : 'rgba(255,255,255,0.4)';
        })
        .attr('font-size', '16px')
        .attr('font-weight', 'bold')
        .style('pointer-events', 'none');
}

function openNeuroModal(day) {
    const monthName = document.getElementById('neuro-month-display').innerText.split(' ')[0];
    document.getElementById('neuroModalDate').innerText = day + ' ' + monthName;
    document.getElementById('neuroSelectedDay').value = day;
    document.getElementById('neuroModal').style.display = 'flex';
}

function setNeuroColor(color, desc) {
    const day = document.getElementById('neuroSelectedDay').value;
    if (!AppData.productivityMap) AppData.productivityMap = {};
    if (!AppData.productivityMap[currentNeuroYear]) AppData.productivityMap[currentNeuroYear] = {};
    if (!AppData.productivityMap[currentNeuroYear][currentNeuroMonth]) AppData.productivityMap[currentNeuroYear][currentNeuroMonth] = {};

    if (color === 'clear') {
        delete AppData.productivityMap[currentNeuroYear][currentNeuroMonth][day];
    } else {
        AppData.productivityMap[currentNeuroYear][currentNeuroMonth][day] = { color: color, desc: desc };
    }
    
    if (typeof saveData === 'function') saveData();
    
    document.getElementById('neuroModal').style.display = 'none';
    initNeuroSyncD3(); // re-render
}
