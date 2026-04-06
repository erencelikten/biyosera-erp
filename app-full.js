// Biyosera ERP - Enterprise Management System

// --- GLOBAL ICONS LIBRARY (SVG) ---
const Icons = {
    dashboard: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    money: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
    chart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
    tool: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    trendDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>'
};

// --- CENTRAL DATA STORE (3x Expanded) ---
const AppData = {
    customers: [
        { id: 1, name: 'Acıbadem Maslak', city: 'İstanbul', type: 'Hastane', contact: 'Dr. Ahmet Yılmaz', phone: '+90 532 111 22 33', status: 'Aktif' },
        { id: 2, name: 'Memorial Şişli', city: 'İstanbul', type: 'Hastane', contact: 'Ayşe Demir', phone: '+90 533 444 55 66', status: 'Aktif' },
        { id: 3, name: 'Ankara Şehir Hastanesi', city: 'Ankara', type: 'Kamu', contact: 'Mehmet Öz', phone: '+90 505 777 88 99', status: 'Aktif' },
        { id: 4, name: 'Ege Üniversitesi Tıp', city: 'İzmir', type: 'Üniversite', contact: 'Prof. Canan Dağ', phone: '+90 544 123 45 67', status: 'Aktif' },
        { id: 5, name: 'Kayseri Şehir Hastanesi', city: 'Kayseri', type: 'Kamu', contact: 'Dr. Hasan Çelik', phone: '+90 535 222 33 44', status: 'Aktif' },
        { id: 6, name: 'Konya Şehir Hastanesi', city: 'Konya', type: 'Kamu', contact: 'Dr. Fatma Arslan', phone: '+90 536 333 44 55', status: 'Görüşülüyor' },
        { id: 7, name: 'Eskişehir Osmangazi Üniversitesi', city: 'Eskişehir', type: 'Üniversite', contact: 'Prof. Ali Kara', phone: '+90 537 444 55 66', status: 'Görüşülüyor' },
        { id: 8, name: 'Erciyes Üniversitesi Tıp', city: 'Kayseri', type: 'Üniversite', contact: 'Doç. Dr. Elif Yıldız', phone: '+90 538 555 66 77', status: 'Teklif Gönderildi' },
        { id: 9, name: 'Sivas Cumhuriyet Üniversitesi', city: 'Sivas', type: 'Üniversite', contact: 'Dr. Murat Demir', phone: '+90 539 666 77 88', status: 'Görüşülüyor' },
        { id: 10, name: 'Ankara Bilkent Şehir', city: 'Ankara', type: 'Kamu', contact: 'Uzm. Zeynep Koç', phone: '+90 541 777 88 99', status: 'Aktif' },
        { id: 11, name: 'Aksaray Devlet Hastanesi', city: 'Aksaray', type: 'Kamu', contact: 'Dr. Serkan Aydın', phone: '+90 542 888 99 00', status: 'Teklif Gönderildi' },
        { id: 12, name: 'Yozgat Şehir Hastanesi', city: 'Yozgat', type: 'Kamu', contact: 'Dr. Cengiz Polat', phone: '+90 543 999 00 11', status: 'Görüşülüyor' },
    ],
    products: [
        { id: 1, name: 'Neuro One - Professional', price: 450000, stock: 12, category: 'Nöroloji' },
        { id: 2, name: 'Neuro One - Home Edition', price: 125000, stock: 45, category: 'Nöroloji' },
        { id: 3, name: 'Biyosera Monitor 5X (BSM-2500)', price: 85000, stock: 20, category: 'Monitör' },
        { id: 4, name: 'Respomed eNO 100', price: 195000, stock: 8, category: 'Solunum' },
        { id: 5, name: 'EEG-1200JK (Nihon Kohden)', price: 320000, stock: 6, category: 'Nöroloji' },
        { id: 6, name: 'aEEG Elmiko CFM', price: 275000, stock: 4, category: 'Nöroloji' },
        { id: 7, name: 'BSM-3000 Bedside Monitor', price: 115000, stock: 15, category: 'Monitör' },
        { id: 8, name: 'TEC-5600 Defibrillator', price: 165000, stock: 10, category: 'Acil' },
        { id: 9, name: 'ECG-3150 Elektrokardiyograf', price: 78000, stock: 18, category: 'Kardiyoloji' },
        { id: 10, name: 'ECG-3250 Elektrokardiyograf', price: 92000, stock: 14, category: 'Kardiyoloji' },
        { id: 11, name: 'ECG-3350 Elektrokardiyograf', price: 105000, stock: 9, category: 'Kardiyoloji' },
        { id: 12, name: 'Electro-Cap ECI Sistemi', price: 42000, stock: 22, category: 'Nöroloji' },
    ],
    sales: [
        { id: 101, customerId: 1, productId: 1, date: '2025-11-15', amount: 450000, status: 'Teslim Edildi' },
        { id: 102, customerId: 3, productId: 3, date: '2025-12-01', amount: 850000, status: 'Kurulum Aşamasında' },
        { id: 103, customerId: 5, productId: 4, date: '2026-01-10', amount: 390000, status: 'Teslim Edildi' },
        { id: 104, customerId: 10, productId: 5, date: '2026-01-22', amount: 640000, status: 'Fatura Kesildi' },
        { id: 105, customerId: 4, productId: 8, date: '2026-02-05', amount: 330000, status: 'Kurulum Aşamasında' },
        { id: 106, customerId: 8, productId: 1, date: '2026-02-18', amount: 900000, status: 'Teklif Gönderildi' },
        { id: 107, customerId: 6, productId: 9, date: '2026-03-01', amount: 156000, status: 'Teslim Edildi' },
        { id: 108, customerId: 2, productId: 7, date: '2026-03-12', amount: 230000, status: 'Beklemede' },
    ],
    maintenance: [
        { id: 1, saleId: 101, nextDate: '2026-04-15', type: 'Periyodik Bakım', status: 'Bekliyor', notes: 'Filtre değişimi yapılacak' },
        { id: 2, saleId: 102, nextDate: '2026-04-28', type: 'Kurulum Kontrol', status: 'Yaklaşıyor', notes: 'Kalibrasyon kontrolü' },
        { id: 3, saleId: 103, nextDate: '2026-05-10', type: 'Garanti Bakım', status: 'Planlandı', notes: 'eNO sensör kontrolü' },
        { id: 4, saleId: 104, nextDate: '2026-04-05', type: 'Arıza Onarım', status: 'Acil', notes: 'EEG sinyal kaybı rapor edildi' },
        { id: 5, saleId: 105, nextDate: '2026-05-20', type: 'Periyodik Bakım', status: 'Planlandı', notes: 'Defibrilatör pil kontrolü' },
        { id: 6, saleId: 107, nextDate: '2026-06-01', type: 'Kalibrasyon', status: 'Bekliyor', notes: 'ECG hassasiyet kalibrasyonu' },
    ],
    receivables: [
        { id: 1, customerId: 1, amount: 150000, dueDate: '2026-04-30', status: 'Bekliyor', ref: 'FAT-2026-011' },
        { id: 2, customerId: 3, amount: 850000, dueDate: '2026-05-15', status: 'Bekliyor', ref: 'FAT-2026-014' },
        { id: 3, customerId: 5, amount: 195000, dueDate: '2026-04-20', status: 'Kısmi Ödendi', ref: 'FAT-2026-018' },
        { id: 4, customerId: 10, amount: 640000, dueDate: '2026-06-01', status: 'Bekliyor', ref: 'FAT-2026-022' },
        { id: 5, customerId: 8, amount: 450000, dueDate: '2026-07-10', status: 'Teklif Aşaması', ref: 'PRO-2026-005' },
        { id: 6, customerId: 4, amount: 165000, dueDate: '2026-05-25', status: 'Bekliyor', ref: 'FAT-2026-027' },
    ],
    payables: [
        { id: 1, supplier: 'TechChip Electronics', amount: 45000, dueDate: '2026-04-25', status: 'Kritik', type: 'Hammadde' },
        { id: 2, supplier: 'MedLojistik A.Ş.', amount: 12000, dueDate: '2026-05-05', status: 'Bekliyor', type: 'Lojistik' },
        { id: 3, supplier: 'Nihon Kohden Japan', amount: 285000, dueDate: '2026-04-15', status: 'Kritik', type: 'İthalat' },
        { id: 4, supplier: 'Elmiko Medical (PL)', amount: 92000, dueDate: '2026-06-10', status: 'Bekliyor', type: 'İthalat' },
    ],
    expenses: [
        { id: 1, category: 'Ar-Ge', amount: 150000, date: '2026-03-10', desc: 'Neuro One V3 Prototip Geliştirme' },
        { id: 2, category: 'Personel', amount: 320000, date: '2026-03-01', desc: 'Mart Ayı Maaşları' },
        { id: 3, category: 'Kira', amount: 45000, date: '2026-03-01', desc: 'Ofis & Depo Kira' },
        { id: 4, category: 'Pazarlama', amount: 75000, date: '2026-03-15', desc: 'Medica 2026 Fuar Hazırlığı' },
        { id: 5, category: 'Lojistik', amount: 28000, date: '2026-03-20', desc: 'Kayseri & Konya Ürün Sevkiyatı' },
        { id: 6, category: 'Hukuk', amount: 15000, date: '2026-03-25', desc: 'İhale Danışmanlığı' },
    ],
    employees: [
        { id: 101, name: 'Ahmet Yılmaz', dept: 'Yazılım', pos: 'Kıdemli Yazılımcı', status: 'Aktif', salary: 85000, start: '2023-05-01' },
        { id: 102, name: 'Ayşe Demir', dept: 'Ar-Ge', pos: 'Biyomedikal Müh.', status: 'Aktif', salary: 75000, start: '2023-06-15' },
        { id: 103, name: 'Mehmet Öz', dept: 'Satış', pos: 'Satış Müdürü', status: 'İzinli', salary: 65000, start: '2024-02-10' },
        { id: 104, name: 'Zeynep Kaya', dept: 'HR', pos: 'HR Uzmanı', status: 'Aktif', salary: 45000, start: '2024-08-20' },
        { id: 105, name: 'Can Tekin', dept: 'Servis', pos: 'Saha Mühendisi', status: 'Aktif', salary: 55000, start: '2024-01-15' },
        { id: 106, name: 'Selin Acar', dept: 'Finans', pos: 'Muhasebe Uzmanı', status: 'Aktif', salary: 52000, start: '2024-03-01' },
        { id: 107, name: 'Burak Şahin', dept: 'Satış', pos: 'Bölge Temsilcisi', status: 'Aktif', salary: 48000, start: '2024-09-10' },
        { id: 108, name: 'Deniz Yıldırım', dept: 'Ar-Ge', pos: 'Elektronik Müh.', status: 'Aktif', salary: 72000, start: '2023-11-01' },
    ],
    checks: [
        { id: 1, type: 'Müşteri Çeki', entity: 'Acıbadem Hastanesi', amount: 150000, dueDate: '2026-06-15', status: 'Portföyde', bank: 'Garanti BBVA', ref: 'TR-12345678' },
        { id: 2, type: 'Firma Çeki', entity: 'Medikal Tedarik A.Ş', amount: 45000, dueDate: '2026-05-20', status: 'Tahsil Edildi', bank: 'İş Bankası', ref: 'TR-98765432' },
        { id: 3, type: 'Senet', entity: 'Ege Özel Sağlık', amount: 25000, dueDate: '2026-05-10', status: 'Karşılıksız', bank: '-', ref: 'SNT-001' },
        { id: 4, type: 'Müşteri Çeki', entity: 'Kayseri Şehir Hastanesi', amount: 195000, dueDate: '2026-07-01', status: 'Portföyde', bank: 'Ziraat', ref: 'TR-55667788' },
        { id: 5, type: 'Müşteri Çeki', entity: 'Ankara Bilkent Şehir', amount: 320000, dueDate: '2026-08-15', status: 'Portföyde', bank: 'Halkbank', ref: 'TR-11223344' },
    ],
    accounts: [
        { id: 1, name: 'Merkez Kasa (Nakit)', type: 'Kasa', balance: 42500, currency: 'TRY' },
        { id: 2, name: 'Garanti BBVA (Ticari)', type: 'Banka', balance: 845000, currency: 'TRY' },
        { id: 3, name: 'İş Bankası (Döviz)', type: 'Banka', balance: 28500, currency: 'USD' },
    ],
    travels: [
        { id: 1, assignee: 'Can Tekin', plate: '34 BSY 145', hospital: 'Kayseri Şehir Hastanesi', city: 'Kayseri', date: '2026-04-08', duration: 3, purpose: 'Neuro One Kurulum & Test', priority: 'Kritik', status: 'Yolda' },
        { id: 2, assignee: 'Mehmet Öz', plate: '34 XYZ 99', hospital: 'Konya Şehir Hastanesi', city: 'Konya', date: '2026-04-12', duration: 2, purpose: 'Şartname ve İhale Sunumu', priority: 'Yüksek', status: 'Planlanıyor' },
        { id: 3, assignee: 'Burak Şahin', plate: 'Kiralık Araç', hospital: 'Cumhuriyet Üniversitesi', city: 'Sivas', date: '2026-04-18', duration: 1, purpose: 'Respomed eNO Demo', priority: 'Normal', status: 'Planlanıyor' },
        { id: 4, assignee: 'Ahmet Yılmaz', plate: '34 ABC 12', hospital: 'Medipol Mega', city: 'İstanbul', date: '2026-04-05', duration: 1, purpose: 'Yazılım Güncelleme', priority: 'Kritik', status: 'Tamamlandı' },
    ],
    projects: [
        { id: 1, name: 'Neuro One V3 Geliştirme', status: 'Devam Ediyor', progress: 68, start: '2025-09-01', deadline: '2026-06-30', lead: 'Ayşe Demir', priority: 'Yüksek' },
        { id: 2, name: 'Respomed eNO Yazılım Güncelleme', status: 'Devam Ediyor', progress: 45, start: '2026-01-15', deadline: '2026-05-15', lead: 'Ahmet Yılmaz', priority: 'Orta' },
        { id: 3, name: 'Ankara Bölge Genişleme', status: 'Devam Ediyor', progress: 82, start: '2025-11-01', deadline: '2026-04-30', lead: 'Mehmet Öz', priority: 'Yüksek' },
        { id: 4, name: 'ISO 13485 Yenileme', status: 'Planlanıyor', progress: 15, start: '2026-03-01', deadline: '2026-09-30', lead: 'Zeynep Kaya', priority: 'Kritik' },
        { id: 5, name: 'Medica 2026 Fuar Hazırlığı', status: 'Devam Ediyor', progress: 30, start: '2026-02-01', deadline: '2026-11-10', lead: 'Burak Şahin', priority: 'Orta' },
    ],
    priorities: [
        { id: 1, task: 'Kayseri Şehir — Neuro One kurulum tamamla', urgency: 'Acil', due: '2026-04-08', assignee: 'Can Tekin' },
        { id: 2, task: 'Ankara Bilkent — EEG arıza çöz', urgency: 'Acil', due: '2026-04-05', assignee: 'Deniz Yıldırım' },
        { id: 3, task: 'Nihon Kohden ödeme — ₺285K ithalat', urgency: 'Kritik', due: '2026-04-15', assignee: 'Selin Acar' },
        { id: 4, task: 'Konya Şehir — satış sunumu hazırla', urgency: 'Yüksek', due: '2026-04-12', assignee: 'Mehmet Öz' },
        { id: 5, task: 'Erciyes Ünv. — teklif revize et', urgency: 'Normal', due: '2026-04-20', assignee: 'Burak Şahin' },
        { id: 6, task: 'Respomed yazılım v2.1 test', urgency: 'Yüksek', due: '2026-04-18', assignee: 'Ahmet Yılmaz' },
        { id: 7, task: 'Fuar standı tasarım onayı', urgency: 'Normal', due: '2026-05-01', assignee: 'Zeynep Kaya' },
    ],
    invoices: [
        { id: 'FAT-2026-011', customerId: 1, amount: 450000, date: '2025-11-20', dueDate: '2026-04-30', status: 'Bekliyor', items: 'Neuro One Pro x1' },
        { id: 'FAT-2026-014', customerId: 3, amount: 850000, date: '2025-12-05', dueDate: '2026-05-15', status: 'Bekliyor', items: 'BSM-2500 x10' },
        { id: 'FAT-2026-018', customerId: 5, amount: 390000, date: '2026-01-15', dueDate: '2026-04-20', status: 'Kısmi Ödendi', items: 'Respomed eNO x2' },
        { id: 'FAT-2026-022', customerId: 10, amount: 640000, date: '2026-01-25', dueDate: '2026-06-01', status: 'Bekliyor', items: 'EEG-1200JK x2' },
        { id: 'FAT-2026-027', customerId: 4, amount: 165000, date: '2026-02-08', dueDate: '2026-05-25', status: 'Bekliyor', items: 'TEC-5600 x1' },
    ],
    users: [
        { id: 1, username: 'eren', password: 'eren', role: 'admin', name: 'Eren Çelikten', status: 'Aktif' },
        { id: 2, username: 'satis', password: '123', role: 'sales', name: 'Satış Personeli', status: 'Aktif' },
        { id: 3, username: 'finans', password: '123', role: 'finance', name: 'Muhasebe Uzmanı', status: 'Aktif' },
    ]
};

// --- CORE FUNCTIONS & SUPABASE ---
const supabaseUrl = 'https://lzenycakmwdmcwitrlfx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6ZW55Y2FrbXdkbWN3aXRybGZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0NzQyODEsImV4cCI6MjA5MTA1MDI4MX0.N6hl_1e9QlZE-TDA3WCZZ3Ej4QPPjm__c-wCJIYNtog';
const supa = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

async function initApp() {
    await loadData();
    loadPage('dashboard');
    setupEventListeners();
    updateNotifications();
}

async function loadData() {
    const DATA_VERSION = 'v3_cockpit';
    const storedVersion = localStorage.getItem('biyosera_erp_version');

    if (supa) {
        try {
            const { data, error } = await supa.from('biyosera_state').select('payload').eq('id', 1).single();
            if (data && data.payload) {
                Object.assign(AppData, data.payload);
                localStorage.setItem('biyosera_erp_data', JSON.stringify(AppData));
                localStorage.setItem('biyosera_erp_version', DATA_VERSION);
                return;
            }
        } catch (e) {
            console.error("Supabase load error", e);
        }
    }

    // Fallback to local storage if Supabase fails or is empty
    const stored = localStorage.getItem('biyosera_erp_data');
    if (stored && storedVersion === DATA_VERSION) {
        Object.assign(AppData, JSON.parse(stored));
    } else {
        localStorage.removeItem('biyosera_erp_data');
        localStorage.setItem('biyosera_erp_version', DATA_VERSION);
        saveData();
    }
}

async function saveData() {
    localStorage.setItem('biyosera_erp_data', JSON.stringify(AppData));
    updateNotifications();
    
    if (supa) {
        try {
            await supa.from('biyosera_state').upsert({ id: 1, payload: AppData });
        } catch (e) {
            console.error("Supabase save error", e);
        }
    }
}

async function wipeAllData() {
    if(confirm('DİKKAT: Sisteme işlediğiniz veya hazır gelen TÜM veriler tamamen SİLİNECEK ve BOMBOŞ bir sisteme geçeceksiniz. Emin misiniz?')) {
        Object.keys(AppData).forEach(key => {
            if(Array.isArray(AppData[key])) AppData[key] = [];
        });
        await saveData();
        alert('Tüm veriler temizlendi. Boş veritabanı ile baştan başlatılıyor.');
        location.reload();
    }
}

async function resetToFactoryData() {
    if(confirm('Sistem fabrikadan gelen ilk "Test/Demo" verilerine dönecektir. Sizin girdiğiniz veriler varsa silinir. Onaylıyor musunuz?')) {
        localStorage.removeItem('biyosera_erp_data');
        localStorage.removeItem('biyosera_erp_version');
        if (supa) {
            await supa.from('biyosera_state').delete().eq('id', 1);
        }
        location.reload();
    }
}

function setupEventListeners() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.dataset.page) { // onclick olanlar (çıkış vb) etkilenmesin
                e.preventDefault();
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                loadPage(item.dataset.page);
            }
        });
    });
}

function updateNotifications() {
    // Count pending items for notification badge
    const pendingMaintenance = AppData.maintenance.filter(m => m.status === 'Yaklaşıyor' || m.status === 'Bekliyor').length;
    const pendingReceivables = AppData.receivables.filter(r => r.status === 'Bekliyor').length;
    const criticalPayables = AppData.payables.filter(p => p.status === 'Kritik').length;

    const totalNotifications = pendingMaintenance + pendingReceivables + criticalPayables;

    // Update the notification badge in the topbar
    const badge = document.querySelector('.notification-badge');
    if (badge) {
        badge.textContent = totalNotifications;
        badge.style.display = totalNotifications > 0 ? 'block' : 'none';
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(amount);
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('tr-TR');
}

function generateRef(prefix) {
    const today = new Date();
    const ds = today.getFullYear() + String(today.getMonth()+1).padStart(2,'0') + String(today.getDate()).padStart(2,'0');
    return prefix + '-' + ds + '-' + String(Math.floor(Math.random()*1000)).padStart(3,'0');
}

function getDaysRemaining(dueDateStr) {
    if (!dueDateStr) return '-';
    const due = new Date(dueDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return `<span class="text-danger bold">${Math.abs(diffDays)} gün gecikti</span>`;
    if (diffDays === 0) return `<span class="text-warning bold">Bugün</span>`;
    if (diffDays <= 7) return `<span class="text-warning bold">${diffDays} gün kaldı</span>`;
    return `<span class="text-success">${diffDays} gün kaldı</span>`;
}

function getCustomerName(id) {
    return AppData.customers.find(c => c.id === id)?.name || 'Bilinmiyor';
}

function getProductName(id) {
    return AppData.products.find(p => p.id === id)?.name || 'Bilinmiyor';
}

// --- PAGE RENDERERS ---
function loadPage(page) {
    const content = document.getElementById('mainContent');
    const title = document.getElementById('pageTitle');

    let html = '';

    switch (page) {
        case 'dashboard':
            title.innerText = 'Yönetim Paneli';
            html = renderDashboard();
            break;
        case 'satis':
            title.innerText = 'Satış Yönetimi';
            html = renderSales();
            break;
        case 'faturalar':
            title.innerText = 'Faturalar & Tahsilat';
            html = renderInvoices();
            break;
        case 'satin-alma':
            title.innerText = 'Satın Alma & Tedarik';
            html = renderPurchasing();
            break;
        case 'stok':
            title.innerText = 'Stok Yönetimi';
            html = renderProduction();
            break;
        case 'servis':
            title.innerText = 'Teknik Servis & Destek';
            html = renderService();
            break;
        case 'bakim':
            title.innerText = 'Bakım & Onarım';
            html = renderMaintenance();
            break;
        case 'finansal':
            title.innerText = 'Finansal Durum';
            html = renderFinance();
            break;
        case 'muhasebe':
            title.innerText = 'Muhasebe & Finans';
            html = renderFinance();
            break;
        case 'cek-senet':
            title.innerText = 'Çek & Senet Yönetimi';
            html = renderChecks();
            break;
        case 'gelir-gider':
            title.innerText = 'Gelir & Gider Detayları';
            html = renderIncomeExpense();
            break;
        case 'masraflar':
            title.innerText = 'Masraf Yönetimi';
            html = renderExpenses();
            break;
        case 'ik':
        case 'personel':
            title.innerText = 'İnsan Kaynakları';
            html = renderHR();
            break;
        case 'projeler':
            title.innerText = 'Proje Yönetimi';
            html = renderProjects();
            break;
        case 'raporlar':
            title.innerText = 'Raporlar & Analizler';
            html = renderReports();
            break;
        case 'imza':
            title.innerText = 'Dijital İmza & Servis Formları';
            html = renderSignature();
            break;
        case 'onay':
            title.innerText = 'Onay Merkezi';
            html = renderApprovals();
            break;
        case 'documents':
            title.innerText = 'Belge & PDF Oluşturucu';
            html = renderDocuments();
            break;
        case 'sartnameler':
            title.innerText = 'Teknik Şartnameler Kütüphanesi';
            html = renderSartnameler();
            break;
        case 'mail':
            title.innerText = 'Mail İstihbaratı & Pazarlama';
            html = renderMailIntelligence();
            break;
        case 'ayarlar':
            title.innerText = 'Sistem Ayarları';
            html = renderSettings();
            break;
        case 'musteriler':
            title.innerText = 'Müşteri Yönetimi';
            html = renderCustomers();
            break;
        case 'kullanicilar':
            title.innerText = 'Kullanıcı ve Yetki Yönetimi';
            html = renderUsers();
            break;
        case 'seyahat':
            title.innerText = 'Araç ve Seyahat Takip Merkezi';
            html = renderTravel();
            break;
        case 'neuro-sync':
            title.innerText = 'Zaman ve Disiplin Haritası';
            html = renderNeuroSync();
            break;
        default:
            title.innerText = page.charAt(0).toUpperCase() + page.slice(1);
            html = `<div class="card"><h3>Modül Hazırlanıyor...</h3><p>${page} modülü yakında aktif olacak.</p></div>`;
    }
    content.innerHTML = html;
    
    if (page === 'neuro-sync' && typeof initNeuroSyncD3 === 'function') {
        setTimeout(initNeuroSyncD3, 10);
    }
}

// --- MODULE: USERS (RBAC) ---
function renderUsers() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Kullanıcı Yönetimi (Admin)</h2>
                <p class="text-muted">Sisteme erişimi olan kullanıcıları ve yetkilerini yönetin</p>
            </div>
            <button class="btn btn-primary" onclick="alert('Kullanıcı Ekleme Modalı Yapılacak')">
                ${Icons.plus} Yeni Kullanıcı
            </button>
        </div>
        <div class="d-card">
            <div class="table-container">
                <table class="d-table">
                    <thead>
                        <tr>
                            <th>Kullanıcı Adı</th>
                            <th>Ad Soyad</th>
                            <th>Rol (Yetki)</th>
                            <th>Durum</th>
                            <th>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${AppData.users.map(u => `
                            <tr>
                                <td class="flex-td">
                                    <div class="avatar-xs text-primary">${u.name.substring(0,1)}</div>
                                    <span class="bold">${u.username}</span>
                                </td>
                                <td>${u.name}</td>
                                <td><span class="d-pill" style="font-size:0.6rem; background:rgba(255,255,255,0.05); color:var(--text-secondary); border: 1px solid var(--border-light);">${u.role.toUpperCase()}</span></td>
                                <td><span class="d-pill ${u.status === 'Aktif' ? 'd-pill-green' : 'd-pill-red'}" style="font-size:0.65rem;">${u.status}</span></td>
                                <td class="text-right">
                                    <button class="btn btn-secondary btn-sm" onclick="alert('Düzenlenecek: ${u.username}')">Düzenle</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function generateSVGChart(dataPoints, color, height = 140, showFill = true) {
    const minVal = Math.min(...dataPoints) * 0.95;
    const maxVal = Math.max(...dataPoints) * 1.05;
    const range = maxVal - minVal || 1;
    const width = 600; // viewBox width
    const points = dataPoints.map((val, i) => {
        const x = (i / (dataPoints.length - 1)) * width;
        const y = height - ((val - minVal) / range) * height;
        return `${x},${y}`;
    }).join(' ');

    const dots = dataPoints.map((val, i) => {
        const x = (i / (dataPoints.length - 1)) * width;
        const y = height - ((val - minVal) / range) * height;
        return `<circle cx="${x}" cy="${y}" r="4" fill="#fff" stroke="${color}" stroke-width="2.5" style="transition:0.3s; cursor:pointer;" onmouseover="this.setAttribute('r', '6')" onmouseout="this.setAttribute('r', '4')"/>`;
    }).join('');

    const fillColor = showFill ? `<linearGradient id="g-${color.replace('#','')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${color}" stop-opacity="0.3"/><stop offset="100%" stop-color="${color}" stop-opacity="0"/></linearGradient>
    <polygon points="0,${height} ${points} ${width},${height}" fill="url(#g-${color.replace('#','')})" />` : '';

    return `
    <div class="svg-chart-container" style="height: ${height}px;">
        <svg viewBox="-10 -10 ${width+20} ${height+20}" preserveAspectRatio="none" style="height:100%; width:100%; overflow:visible;">
            <defs>
                <filter id="glow-${color.replace('#','')}">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>
            ${fillColor}
            <polyline points="${points}" fill="none" stroke="${color}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" filter="url(#glow-${color.replace('#','')})"/>
            ${dots}
        </svg>
    </div>`;
}

function generateSVGGauge(percentage, label, valueStr, color) {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    
    return `
    <div class="gauge-wrapper" style="display:flex; flex-direction:column; align-items:center; position:relative; padding:10px;">
        <svg class="gauge-svg" width="100" height="100" viewBox="0 0 100 100" style="transform: rotate(-90deg);">
            <defs>
                <filter id="glow-gauge-${color.replace('#','')}">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
            </defs>
            <!-- Background track -->
            <circle cx="50" cy="50" r="${radius}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8" />
            <!-- Progress track -->
            <circle cx="50" cy="50" r="${radius}" fill="none" stroke="${color}" stroke-width="8" 
                stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"
                filter="url(#glow-gauge-${color.replace('#','')})" style="transition: stroke-dashoffset 1s ease-in-out;" />
        </svg>
        <div class="gauge-center">
            <div class="bold gauge-percent">${percentage}%</div>
        </div>
        <div class="gauge-label-group">
            <div class="text-muted gauge-label">${label}</div>
            <div class="bold gauge-value" style="color:var(--text-primary);">${valueStr}</div>
        </div>
    </div>`;
}

function renderDashboard() {
    const totalSales = AppData.sales.reduce((sum, s) => sum + s.amount, 0);
    const totalReceivables = AppData.receivables.reduce((sum, r) => sum + r.amount, 0);
    const totalPayables = AppData.payables.reduce((sum, p) => sum + p.amount, 0);
    const totalExpenses = AppData.expenses.reduce((s, e) => s + e.amount, 0);
    const netCashFlow = totalSales - totalPayables - totalExpenses;
    const conversionRate = 68; // fake percentage 

    const urgencyColor = { 'Acil': '#FF5263', 'Kritik': '#A855F7', 'Yüksek': '#3B82F6', 'Normal': '#10B981' };
    const statusColor = { 'Aktif': '#10B981', 'Görüşülüyor': '#3B82F6', 'Teklif Gönderildi': '#A855F7' };
    const travelStatusColor = { 'Bugün': '#FF5263', 'Onaylandı': '#10B981', 'Planlanıyor': '#3B82F6' };

    // Fake trend data for charts to look cinematic
    const mainChartData = [12000, 15000, 14000, 18000, 15500, 22000, 19000, 25000, 24000];
    const grossData = [45000, 52000, 48000, 58000, 65000, 60000, 72000, 85000];
    const netData = [25000, 28000, 26000, 31000, 34000, 32000, 38000, 42000];

    return `
        <div class="dashboard-canvas">
            
            <!-- ROW 0: THE EXTREME GAUGES GROUPED -->
            <div class="d-card mb-2" style="padding: 24px;">
                <div class="cockpit-gauges">
                    <div class="gauge-widget">
                        ${generateSVGGauge(45, 'NET KÂR MARJI', formatCurrency(netCashFlow), '#10B981')}
                    </div>
                    <div class="gauge-widget">
                        ${generateSVGGauge(72, 'TAHSİLAT ORANI', formatCurrency(totalSales), '#6D4AFF')}
                    </div>
                    <div class="gauge-widget">
                        ${generateSVGGauge(38, 'AÇIK ALACAK', formatCurrency(totalReceivables), '#3B82F6')}
                    </div>
                    <div class="gauge-widget">
                        ${generateSVGGauge(15, 'RİSKLİ BORÇ', formatCurrency(totalPayables), '#FF5263')}
                    </div>
                </div>
            </div>

            <!-- ROW 1: Wide Chart + Daily Stats -->
            <div class="dash-row" style="margin-bottom: 10px;">
                <!-- Main Wide Chart -->
                <div class="d-card" style="flex: 3;">
                    <div class="d-card-header">
                        <div class="d-card-title">Aylık Nakit Akışı (Kâr/Zarar Eğilimi)
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        </div>
                        <div class="icon-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></div>
                    </div>
                    <div class="d-value-large">
                        ${formatCurrency(netCashFlow).replace('₺','₺ ')}
                        <span class="d-pill d-pill-green">+ %18 Büyüme ↑</span>
                    </div>
                    <div class="text-muted" style="font-size: 0.75rem; margin-top: 4px;">Toplam Ciro ${formatCurrency(totalSales).replace('₺', '₺ ')}</div>
                    
                    ${generateSVGChart(mainChartData, '#6D4AFF', 220, true)}
                    
                    <div class="flex-between text-muted mt-2" style="font-size: 0.65rem; font-weight: 500; font-family: monospace;">
                        <span>Ocak</span><span>Şubat</span><span>Mart</span><span>Nisan</span><span>Mayıs</span><span>Haziran</span><span>Temmuz</span>
                    </div>
                </div>

                <!-- Right Side: Nakit Akışı Stats -->
                <div class="d-card" style="flex: 1; display:flex; flex-direction:column; gap:6px;">
                    <div class="d-card-header" style="margin-bottom: 10px;">
                        <div class="d-card-title">Nakit Durumu (Cash Flow)
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        </div>
                    </div>
                    
                    <div class="stat-row" style="background: rgba(255,255,255,0.02); padding: 16px; border-radius: var(--radius-lg); margin-bottom: 4px; border: 1px solid var(--border-light);">
                        <div class="stat-row-left">
                            <div class="stat-indicator" style="background: #10B981;"></div>
                            <div class="stat-label">Gelen Ücret</div>
                        </div>
                        <div class="stat-value-group">
                            <div class="stat-topline">${formatCurrency(AppData.receivables.filter(r => r.status === 'Kısmi Ödendi').reduce((s,r) => s + r.amount, 0) + AppData.checks.filter(c => c.status === 'Tahsil Edildi').reduce((s,c) => s + c.amount, 0))}</div>
                        </div>
                    </div>

                    <div class="stat-row" style="background: rgba(255,255,255,0.02); padding: 16px; border-radius: var(--radius-lg); margin-bottom: 4px; border: 1px solid var(--border-light);">
                        <div class="stat-row-left">
                            <div class="stat-indicator" style="background: #FF5263;"></div>
                            <div class="stat-label">Giden Ödeme</div>
                        </div>
                        <div class="stat-value-group">
                            <div class="stat-topline text-danger">${formatCurrency(totalExpenses)}</div>
                        </div>
                    </div>

                    <div class="stat-row" style="background: rgba(255,255,255,0.02); padding: 16px; border-radius: var(--radius-lg); margin-bottom: 4px; border: 1px solid var(--border-light);">
                        <div class="stat-row-left">
                            <div class="stat-indicator" style="background: #3B82F6;"></div>
                            <div class="stat-label">Gelecek Alacak</div>
                        </div>
                        <div class="stat-value-group">
                            <div class="stat-topline">${formatCurrency(totalReceivables)}</div>
                        </div>
                    </div>

                     <div class="stat-row" style="background: rgba(255,255,255,0.02); padding: 16px; border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
                        <div class="stat-row-left">
                            <div class="stat-indicator" style="background: #F5A623;"></div>
                            <div class="stat-label">Gidecek Borç</div>
                        </div>
                        <div class="stat-value-group">
                            <div class="stat-topline" style="color:var(--warning);">${formatCurrency(totalPayables)}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ROW 1.5 Header -->
            <div class="flex-between">
                <h3 style="font-size: 1.2rem; font-weight: 500; font-family: monospace;">Finansal Derin Analiz <span class="text-muted" style="font-size: 0.8rem; margin-left: 10px;">Son 2 Hafta</span></h3>
                <div class="d-segment-control">
                    <button class="d-seg-btn active">Genel Bakış</button>
                    <button class="d-seg-btn">Karşılaştırma</button>
                </div>
            </div>

            <!-- ROW 2: Financial Split Charts -->
            <div class="grid grid-3 mb-2">
                <!-- Card 1: Gross Revenue -->
                <div class="d-card">
                    <div class="d-card-header" style="margin-bottom: 10px;">
                        <div class="d-card-title">Hacim Beklentisi (Brüt) <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
                    </div>
                    <div class="d-value-large mb-1" style="font-size: 1.6rem;">
                        ${formatCurrency(totalSales).replace('₺','₺ ')}
                        <span class="d-pill d-pill-green" style="font-size: 0.65rem;">+₺3,804.15 ↑</span>
                    </div>
                    ${generateSVGChart(grossData, '#6D4AFF', 100, false)}
                </div>

                <!-- Card 2: Net Revenue -->
                <div class="d-card">
                    <div class="d-card-header" style="margin-bottom: 10px;">
                        <div class="d-card-title">Gerçekleşen Denge (Net) <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
                    </div>
                    <div class="d-value-large mb-1" style="font-size: 1.6rem;">
                        ${formatCurrency(netCashFlow).replace('₺','₺ ')}
                        <span class="d-pill d-pill-red" style="font-size: 0.65rem;">-₺690.55 ↓</span>
                    </div>
                    ${generateSVGChart(netData, '#3B82F6', 100, false)}
                </div>

                <!-- Card 3: Payments Details -->
                <div class="d-card">
                    <div class="d-card-header" style="margin-bottom: 15px;">
                        <div class="d-card-title">Detaylı Finansal Dağılım <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
                    </div>
                    
                    <div class="d-progress-wrap">
                        <div class="d-progress-bar">
                            <div class="d-segment" style="width: 22%; background: #10B981;"></div>
                            <div class="d-segment" style="width: 13%; background: #3B82F6;"></div>
                            <div class="d-segment" style="width: 37%; background: #6D4AFF;"></div>
                            <div class="d-segment" style="width: 22%; background: #FF5263;"></div>
                            <div class="d-segment" style="width: 6%; background: #F5A623;"></div>
                        </div>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:8px; margin-top: 16px;">
                        <div class="flex-between" style="font-size:0.8rem;"><div class="flex-td"><span class="stat-indicator" style="background:#10B981; height:10px;"></span><span class="text-secondary">Tahsil Edilen</span></div> <span class="bold">481 (22%)</span></div>
                        <div class="flex-between" style="font-size:0.8rem;"><div class="flex-td"><span class="stat-indicator" style="background:#3B82F6; height:10px;"></span><span class="text-secondary">Geçmiş Vadeli</span></div> <span class="text-muted">202 (13%)</span></div>
                        <div class="flex-between" style="font-size:0.8rem;"><div class="flex-td"><span class="stat-indicator" style="background:#6D4AFF; height:10px;"></span><span class="text-secondary">Bekleyen</span></div> <span class="text-muted">534 (37%)</span></div>
                        <div class="flex-between" style="font-size:0.8rem;"><div class="flex-td"><span class="stat-indicator" style="background:#FF5263; height:10px;"></span><span class="text-secondary">Kritik Risk</span></div> <span class="text-danger">495 (22%)</span></div>
                    </div>
                </div>
            </div>

            <!-- ROW 3 Header -->
            <div class="flex-between mt-2">
                <h3 style="font-size: 1.2rem; font-weight: 500; font-family: monospace;">Operasyonlar & Yönetim <span class="text-muted" style="font-size: 0.8rem; margin-left: 10px;">Aktif Yönetim</span></h3>
            </div>

            <!-- ROW 2: 3 Columns Wide -->
            <div class="grid grid-3">
                <!-- Card 1: Priorities -->
                <div class="d-card">
                    <div class="d-card-header" style="margin-bottom: 10px;">
                        <div class="d-card-title">🔥 İş Öncelik Sıralaması</div>
                    </div>
                    <table class="d-table">
                        <tbody>
                            ${AppData.priorities.map((p, i) => `
                                <tr>
                                    <td class="text-muted text-sm">${i + 1}.</td>
                                    <td>
                                        <div class="bold" style="font-size:0.8rem;">${p.task}</div>
                                        <div class="text-secondary" style="font-size:0.65rem;">${p.assignee} · ${formatDate(p.due)}</div>
                                    </td>
                                    <td class="text-right">
                                        <span class="d-pill" style="font-size:0.6rem; background:transparent; color:${urgencyColor[p.urgency]}; border: 1px solid ${urgencyColor[p.urgency]}40;">${p.urgency}</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <!-- Card 2: Projects -->
                <div class="d-card">
                    <div class="d-card-header" style="margin-bottom: 10px;">
                        <div class="d-card-title">📊 Proje Yönetimi</div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:16px;">
                        ${AppData.projects.map(p => `
                            <div>
                                <div class="flex-between mb-1">
                                    <span class="bold" style="font-size:0.8rem;">${p.name}</span>
                                    <span class="text-muted" style="font-size:0.75rem; font-family:monospace;">${p.progress}%</span>
                                </div>
                                <div class="d-progress-bar" style="margin-bottom:6px; height:6px;">
                                    <div class="d-segment" style="width:${p.progress}%; background:${p.priority === 'Kritik' ? '#FF5263' : p.priority === 'Yüksek' ? '#6D4AFF' : '#10B981'}"></div>
                                </div>
                                <div class="text-secondary" style="font-size:0.65rem;">${p.lead} · ${p.status}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Card 3: Travels -->
                <div class="d-card">
                    <div class="d-card-header" style="margin-bottom: 15px;">
                        <div class="d-card-title">✈️ Seyahat Planı</div>
                    </div>
                    <table class="d-table">
                        <tbody>
                            ${AppData.travels.map(t => `
                                <tr>
                                    <td class="flex-td">
                                        <div style="text-align:center; background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:6px;">
                                            <div class="bold" style="font-size:0.9rem;">${new Date(t.date).getDate()}</div>
                                            <div class="text-muted" style="font-size:0.6rem; text-transform:uppercase;">${new Date(t.date).toLocaleString('tr', {month:'short'})}</div>
                                        </div>
                                        <div>
                                            <div class="bold" style="font-size:0.8rem;">${t.city}</div>
                                            <div class="text-secondary" style="font-size:0.65rem;">${t.purpose}</div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        <span class="d-pill" style="font-size:0.6rem; color:${travelStatusColor[t.status] || '#888'}; background:transparent; border:1px solid ${travelStatusColor[t.status]}40;">${t.status}</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- ROW 3: Grid 2 for Hospitals & Feed -->
            <div class="grid grid-2">
                <!-- Hospitals -->
                <div class="d-card">
                    <div class="d-card-header">
                        <div class="d-card-title">🏥 Görüşülen Hastaneler</div>
                        <div class="icon-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg></div>
                    </div>
                    <table class="d-table">
                        <tbody>
                            ${AppData.customers.map(c => `
                                <tr>
                                    <td class="flex-td">
                                        <div class="stat-indicator" style="background:${statusColor[c.status] || '#666'};"></div>
                                        <div>
                                            <div class="bold" style="font-size:0.85rem;">${c.name}</div>
                                            <div class="text-secondary" style="font-size:0.65rem;">${c.city} · ${c.type}</div>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        <span style="font-size:0.65rem; color:${statusColor[c.status] || '#666'}; font-weight:600;">${c.status}</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <!-- Live Feed -->
                <div class="d-card">
                    <div class="d-card-header">
                        <div class="d-card-title">⚡ Canlı Akış <span class="status-dot ok ml-1"></span></div>
                    </div>
                    <table class="d-table">
                        <tbody>
                            <tr>
                                <td class="text-muted" style="width:50px; font-family:monospace; font-size:0.75rem;">12:45</td>
                                <td>
                                    <div class="bold" style="font-size:0.8rem;">Sistem Girişi</div>
                                    <div class="text-secondary" style="font-size:0.7rem;">Eren Çelikten sisteme giriş yaptı</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-muted" style="width:50px; font-family:monospace; font-size:0.75rem;">12:30</td>
                                <td>
                                    <div class="bold" style="font-size:0.8rem;">Yeni Sipariş</div>
                                    <div class="text-secondary" style="font-size:0.7rem;">Kayseri Şehir — Respomed eNO x2</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-muted" style="width:50px; font-family:monospace; font-size:0.75rem;">11:15</td>
                                <td>
                                    <div class="bold text-warning" style="font-size:0.8rem;">Stok Uyarısı</div>
                                    <div class="text-secondary" style="font-size:0.7rem;">aEEG Elmiko CFM stok: 4 adet (Kritik)</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-muted" style="width:50px; font-family:monospace; font-size:0.75rem;">10:00</td>
                                <td>
                                    <div class="bold text-success" style="font-size:0.8rem;">Tahsilat</div>
                                    <div class="text-secondary" style="font-size:0.7rem;">Ankara Bilkent ödemesi ₺320K onaylandı</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-muted" style="width:50px; font-family:monospace; font-size:0.75rem;">09:12</td>
                                <td>
                                    <div class="bold" style="font-size:0.8rem;">Servis Raporu</div>
                                    <div class="text-secondary" style="font-size:0.7rem;">EEG-1200JK kalibrasyon tamamlandı</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    `;
}

// --- MODULE: SALES ---
function renderSales() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Satış & Proforma Yönetimi</h2>
                <p class="text-muted">Fırsatlar, proformalar ve kurumsal teklifler</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-secondary" onclick="openModal('proforma')">
                    ${Icons.plus} Yeni Proforma
                </button>
                <button class="btn btn-primary" onclick="openModal('sale')">
                    ${Icons.plus} Yeni Satış
                </button>
            </div>
        </div>
        <div class="d-card">
            <div class="d-card-header">
                <div class="d-card-title">Son Satışlar & Proformalar</div>
            </div>
            <div class="table-container">
                <table class="d-table">
                    <thead>
                        <tr>
                            <th>Satış ID</th>
                            <th>Hastane / Kurum</th>
                            <th>Cihaz Modeli</th>
                            <th>Tarih</th>
                            <th class="text-right">Tutar</th>
                            <th class="text-right">Durum</th>
                            <th class="text-right">İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${AppData.sales.map(s => {
        const prod = AppData.products.find(p => p.id === s.productId);
        const cat = prod ? prod.category : 'Genel';
        const colorClass = cat === 'Nöroloji' ? 'text-primary' : cat === 'Solunum' ? 'text-info' : 'text-warning';
        return `
                            <tr>
                                <td class="text-muted text-sm">#${s.id}</td>
                                <td class="bold">${getCustomerName(s.customerId)}</td>
                                <td class="flex-td">
                                    <div class="avatar-xs ${colorClass}">${cat.substring(0,1)}</div>
                                    <span>${getProductName(s.productId)}</span>
                                </td>
                                <td>${formatDate(s.date)}</td>
                                <td class="text-right bold">${formatCurrency(s.amount)}</td>
                                <td class="text-right"><span class="d-pill" style="font-size:0.6rem; background:rgba(255,255,255,0.05); color:var(--text-secondary); border: 1px solid var(--border-light);">${s.status}</span></td>
                                <td class="text-right flex gap-1 justify-end">
                                    <button class="btn btn-secondary btn-sm">Detay</button>
                                    <button class="btn btn-danger btn-sm" onclick="deleteItem('sale', ${s.id})">Sil</button>
                                </td>
                            </tr>
                        `}).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: SERVICE & MAINTENANCE ---
function renderService() {
    return `
        <div class="flex-between mb-2">
             <div>
                <h2>Teknik Servis & Bakım Takibi</h2>
                <p class="text-muted">Periyodik bakımlar ve arıza kayıtları</p>
            </div>
            <button class="btn btn-primary" onclick="alert('Bakım planlama modalı açılacak')">
                ${Icons.plus} Bakım Planla
            </button>
        </div>
        <div class="grid grid-3 mb-2">
            ${AppData.maintenance.map(m => {
        const sale = AppData.sales.find(s => s.id === m.saleId);
        const custName = sale ? getCustomerName(sale.customerId) : 'Bilinmiyor';
        const prodName = sale ? getProductName(sale.productId) : 'Bilinmiyor';

        return `
                 <div class="card" style="border-left: 4px solid var(--primary)">
                    <div style="font-size:0.8rem; color:var(--text-muted)">${formatDate(m.nextDate)}</div>
                    <h3 class="mt-1">${custName}</h3>
                    <div class="text-primary mb-1">${prodName}</div>
                    <div class="badge badge-warning">${m.type}</div>
                    <p class="mt-1" style="font-size:0.9rem">${m.notes}</p>
                    <button class="btn btn-secondary mt-2 w-100">Servis Raporu Gir</button>
                 </div>
                 `;
    }).join('')}
        </div>
    `;
}

// --- MODULE: FINANCE ---
function renderFinance() {
    return `
        <div class="flex-between mb-2">
             <div>
                <h2>Finansal Yönetim</h2>
                <p class="text-muted">Gelir, gider ve nakit akışı kontrolü</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-success" onclick="openModal('income')">${Icons.plus} Gelir Ekle</button>
                <button class="btn btn-danger" onclick="openModal('expense')">${Icons.plus} Gider Ekle</button>
            </div>
        </div>

        <div class="grid grid-2">
            <div class="card">
                <div class="card-header"><h3>Alacak Takibi (Gelecek Para)</h3></div>
                <table class="w-100">
                    ${AppData.receivables.map(r => `
                        <tr style="border-bottom:1px solid var(--border)">
                            <td class="p-2">${getCustomerName(r.customerId)}</td>
                            <td class="p-2 text-right">${formatDate(r.dueDate)}</td>
                            <td class="p-2 text-right text-success bold">${formatCurrency(r.amount)}</td>
                            <td class="p-2 text-right"><button class="btn btn-warning btn-sm" onclick="editItem('income', ${r.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-danger btn-sm" onclick="deleteItem('receivable', ${r.id})">Sil</button></td>
                        </tr>
                    `).join('')}
                </table>
            </div>
            <div class="card">
                <div class="card-header"><h3>Ödeme Takibi (Çıkacak Para)</h3></div>
                <table class="w-100">
                    ${AppData.payables.map(p => `
                        <tr style="border-bottom:1px solid var(--border)">
                            <td class="p-2">${p.supplier}</td>
                            <td class="p-2 text-right">${formatDate(p.dueDate)}</td>
                            <td class="p-2 text-right text-danger bold">${formatCurrency(p.amount)}</td>
                            <td class="p-2 text-right"><button class="btn btn-warning btn-sm" onclick="editItem('purchase', ${p.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-danger btn-sm" onclick="deleteItem('payable', ${p.id})">Sil</button></td>
                        </tr>
                    `).join('')}
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: CHECKS & NOTES (ÇEK & SENET) ---
function renderChecks() {
    const portfolioTotal = AppData.checks.filter(c => c.status === 'Portföyde').reduce((sum, c) => sum + c.amount, 0);
    const bouncedTotal = AppData.checks.filter(c => c.status === 'Karşılıksız').reduce((sum, c) => sum + c.amount, 0);

    return `
        <div class="flex-between mb-2">
             <div>
                <h2>Çek & Senet Takibi</h2>
                <p class="text-muted">Müşteri çekleri, firma senetleri ve tahsilat durumları</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-primary" onclick="openModal('check')">${Icons.plus} Yeni Evrak Gir</button>
            </div>
        </div>

        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                <div class="stat-value text-info">${formatCurrency(portfolioTotal)}</div>
                <div class="stat-label">Portföydeki Çekler</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-danger" style="opacity:0.9">${formatCurrency(bouncedTotal)}</div>
                <div class="stat-label">Karşılıksız / Şüpheli</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${AppData.checks.length}</div>
                <div class="stat-label">Toplam Evrak Sayısı</div>
            </div>
        </div>

        <div class="card">
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Evrak Tipi</th>
                            <th>Referans No</th>
                            <th>Cari / Kurum</th>
                            <th>Banka</th>
                            <th>Vade Tarihi</th>
                            <th>Tutar</th>
                            <th>Durum</th>
                            <th>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${AppData.checks.map(c => `
                            <tr>
                                <td><span class="badge ${c.type === 'Senet' ? 'badge-warning' : 'badge-info'}">${c.type}</span></td>
                                <td><strong>${c.ref}</strong></td>
                                <td>${c.entity}</td>
                                <td>${c.bank}</td>
                                <td>${formatDate(c.dueDate)}</td>
                                <td class="bold">${formatCurrency(c.amount)}</td>
                                <td>
                                    <span class="badge badge-${c.status === 'Tahsil Edildi' ? 'success' :
            (c.status === 'Karşılıksız' ? 'danger' : 'warning')
        }">${c.status}</span>
                                <td>
                                    <button class="btn btn-warning btn-sm" onclick="editItem('check', ${c.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-danger btn-sm" onclick="deleteItem('check', ${c.id})">Sil</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: SARTNAMELER (TECHNICAL SPECIFICATIONS) ---
// --- MODULE: DOCUMENTS GENERATOR ---
function renderDocuments() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Belge & Evrak Oluşturucu</h2>
                <p class="text-muted">Resmi Fatura, Proforma ve Şartnameleri Biyosera antetiyle hazırlayın</p>
            </div>
        </div>
        
        <div class="grid grid-3 mb-2">
            <div class="card p-2" style="text-align: center; cursor: pointer; transition: 0.3s;" onmouseover="this.style.borderColor='var(--primary)'" onmouseout="this.style.borderColor='var(--border)'" onclick="openModal('doc-invoice')">
                <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary)">📄</div>
                <h3>Resmi Fatura Kes</h3>
                <p class="text-muted text-sm mt-1">Müşterilere gidecek asıl ticari fatura</p>
            </div>
            
            <div class="card p-2" style="text-align: center; cursor: pointer; transition: 0.3s;" onmouseover="this.style.borderColor='var(--warning)'" onmouseout="this.style.borderColor='var(--border)'" onclick="openModal('proforma')">
                <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--warning)">📑</div>
                <h3>Proforma Fatura</h3>
                <p class="text-muted text-sm mt-1">Teklif öncesi proforma hazırlama</p>
            </div>
            
            <div class="card p-2" style="text-align: center; cursor: pointer; transition: 0.3s;" onmouseover="this.style.borderColor='var(--success)'" onmouseout="this.style.borderColor='var(--border)'" onclick="openModal('doc-sartname')">
                <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--success)">📋</div>
                <h3>Teknik Şartname</h3>
                <p class="text-muted text-sm mt-1">İhale ve şartname dokümanı hazırlama</p>
            </div>
        </div>
    `;
}

function renderSartnameler() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Teknik Şartnameler Arşivi</h2>
                <p class="text-muted">Cihazların Türkçe teknik şartnameleri ve ihale dökümanları</p>
            </div>
            <button class="btn btn-primary" onclick="alert('Şartname Ekle (PDF/Word/HTML)')">${Icons.plus} Şartname Yükle</button>
        </div>
        <div class="grid grid-3">
            <div class="card" style="border-left: 4px solid var(--primary);">
                <div class="flex-between">
                    <h3 style="margin-bottom: 8px;">Neuro One V2</h3>
                    <span class="badge badge-info">PDF & HTML</span>
                </div>
                <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 16px;">Beyin haritalama ve nöromodülasyon donanımı güncel şartnamesi.</p>
                <div class="flex gap-1">
                    <button class="btn btn-secondary w-100">Görüntüle</button>
                    <button class="btn btn-primary w-100">İndir</button>
                </div>
            </div>
            
            <div class="card" style="border-left: 4px solid var(--primary);">
                <div class="flex-between">
                    <h3 style="margin-bottom: 8px;">Respomed eNO</h3>
                    <span class="badge badge-info">PDF & HTML</span>
                </div>
                <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 16px;">Fraksiyone ekshale nitrik oksit ölçüm cihazı şartnamesi.</p>
                <div class="flex gap-1">
                     <button class="btn btn-secondary w-100" onclick="window.open('../Biyosera_Teknik_Sartnameler/Respomed_eNO_PDF_Katalog.html', '_blank')">Görüntüle</button>
                    <button class="btn btn-primary w-100">İndir</button>
                </div>
            </div>

            <div class="card" style="border-left: 4px solid var(--warning);">
                <div class="flex-between">
                    <h3 style="margin-bottom: 8px;">Biyosera Monitör 5X</h3>
                    <span class="badge badge-warning">Sadece PDF</span>
                </div>
                <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 16px;">Yoğun bakım hasta başı monitörü genel özellikleri.</p>
                <div class="flex gap-1">
                    <button class="btn btn-secondary w-100">Görüntüle</button>
                    <button class="btn btn-primary w-100">İndir</button>
                </div>
            </div>
        </div>
    `;
}

// --- MODULE: MAIL INTELLIGENCE ---
function renderMailIntelligence() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Mail İstihbaratı ve Hedef Kitle</h2>
                <p class="text-muted">Kurumsal pazarlama, bayiler ve hastane veritabanı iletişimi</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-secondary">Mail Listesi İçe Aktar</button>
                <button class="btn btn-warning" onclick="openModal('email-campaign')">Yeni Kampanya</button>
            </div>
        </div>

        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                 <div class="stat-value text-info">4.250</div>
                 <div class="stat-label">Toplam Kayıtlı Mail</div>
            </div>
            <div class="stat-card">
                 <div class="stat-value text-success">%68</div>
                 <div class="stat-label">Ortalama Açılma Oranı</div>
            </div>
            <div class="stat-card">
                 <div class="stat-value text-warning">Devam Ediyor</div>
                 <div class="stat-label">Aktif Kampanya: NeuroOne Lansman</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3>Hedef Kitle Listeleri (Veritabanları)</h3>
            </div>
            <div class="table-container">
                <table>
                    <thead><tr><th>Liste Adı</th><th>Açıklama</th><th>Kişi Sayısı</th><th>Son Güncelleme</th><th>İşlem</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><strong>Wolf Makina Bayileri</strong></td>
                            <td>Türkiye geneli endüstriyel medikal bayiler</td>
                            <td>450</td>
                            <td>12.12.2025</td>
                            <td><button class="btn btn-secondary btn-sm">Detay</button></td>
                        </tr>
                        <tr>
                            <td><strong>Özel Hastaneler Başhekimlik</strong></td>
                            <td>A Sınıfı özel hastane karar vericileri</td>
                            <td>1.250</td>
                            <td>05.11.2025</td>
                            <td><button class="btn btn-secondary btn-sm">Detay</button></td>
                        </tr>
                        <tr>
                            <td><strong>Nörologlar Kongre Kayıtları</strong></td>
                            <td>2024 Ulusal Nöroloji Kongresi katılımcıları</td>
                            <td>2.550</td>
                            <td>20.10.2025</td>
                            <td><button class="btn btn-secondary btn-sm">Detay</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODAL SYSTEM ---
function openModal(type) {
    const modal = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    modal.classList.add('active');

    // ... (Modal Content Logic Same as before, just ensuring clean HTML)
    // Şimdilik modal içeriğini koruyoruz, çünkü orada emoji yok (form elemanları var)
    // Ancak service-form'daki imza kısmı emoji içeriyordu, onu temizleyelim.

    if (type === 'sale') {
        title.innerText = 'Yeni Satış Kaydı';
        body.innerHTML = `
        <form id="form-sale" class="grid grid-2 gap-2">
                <div class="form-group"><label class="form-label">Müşteri</label><select id="sale-customer" class="form-select">${AppData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
                <div class="form-group"><label class="form-label">Ürün</label><select id="sale-product" class="form-select">${AppData.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select></div>
                <div class="form-group"><label class="form-label">Tarih</label><input id="sale-date" type="date" class="form-input"></div>
                <div class="form-group"><label class="form-label">Tutar</label><input id="sale-amount" type="number" class="form-input"></div>
            </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('sale')">Kaydet</button></div>
    `;
    }
    else if (type === 'proforma' || type === 'doc-invoice' || type === 'doc-sartname') {
        const isInvoice = type === 'doc-invoice';
        const isSartname = type === 'doc-sartname';

        title.innerText = isInvoice ? 'Resmi Fatura Düzenle' : (isSartname ? 'Teknik Şartname Oluştur' : 'Kurumsal Proforma Hazırla');
        body.innerHTML = `
        <form id="form-document" class="grid grid-2 gap-2" style="max-height: 60vh; overflow-y: auto; padding-right: 5px;">
            <!-- Müşteri ve İlgili Kişi -->
            <div class="form-group">
                <label class="form-label">${isSartname ? 'İhale / Kurum Adı' : 'Müşteri (Cari)'}</label>
                <select id="doc-customer" class="form-select">
                    ${AppData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">İlgili Kişi (Attention)</label>
                <input id="doc-attention" type="text" class="form-input" placeholder="Sn. Başhekim / Satınalma Md.">
            </div>

            <!-- Evrak Info -->
            <div class="form-group">
                <label class="form-label">${isInvoice ? 'Fatura No' : (isSartname ? 'Şartname No' : 'Proforma No')}</label>
                <input id="doc-no" type="text" class="form-input" value="${isInvoice ? 'FAT' : (isSartname ? 'SRT' : 'PROF')}-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}">
            </div>
            <div class="form-group">
                <label class="form-label">Tarih</label>
                <input id="doc-date" type="date" class="form-input" value="${new Date().toISOString().split('T')[0]}">
            </div>

            <!-- Şartlar -->
            <div class="form-group">
                <label class="form-label">Para Birimi</label>
                <select id="doc-currency" class="form-select">
                    <option value="TRY">TRY (₺)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Geçerlilik Süresi</label>
                <input id="doc-validity" type="text" class="form-input" value="15 Gün">
            </div>
            <div class="form-group">
                <label class="form-label">Teslimat Şartı</label>
                <select id="doc-delivery" class="form-select">
                    <option value="DAP - Hastane Teslim (Yerinde Kurulum)">DAP - Hastane Teslim (Yerinde Kurulum)</option>
                    <option value="EXW - Fabrika Teslim">EXW - Fabrika Teslim</option>
                    <option value="CIP - Taşıma Ödenmiş">CIP - Taşıma Ödenmiş</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Ödeme Şartı</label>
                <input id="doc-payment" type="text" class="form-input" value="%50 Siparişte Peşin, %50 Teslimatta">
            </div>

            <!-- Cihazlar / İtemler -->
            <div class="form-group" style="grid-column: span 2;">
                <div class="flex-between mb-1">
                    <label class="form-label">Teklif Kalemleri (Ürünler)</label>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="addProformaItemRow()">+ Kalem Ekle</button>
                </div>
                <div id="proforma-items-container" style="display:flex; flex-direction:column; gap:8px;">
                    <!-- Defaults generated by JS -->
                </div>
            </div>
            <div class="form-group" style="grid-column: span 2;">
                <label class="form-label">Notlar / Açıklamalar</label>
                <textarea id="doc-notes" class="form-textarea" rows="2" placeholder="Kurulum firmamızca yapılacaktır..."></textarea>
            </div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" style="padding: 14px; font-size: 1.1rem;" onclick="generateAndPrintPDF('${type}')">PDF Oluştur ve Yazdır</button></div>
        `;
        
        // Add at least one row immediately
        setTimeout(() => addProformaItemRow(), 50);
    }
    else if (type === 'email-campaign') {
        title.innerText = 'Yeni Mail Kampanyası / Göndergesi';
        body.innerHTML = `
        <form id="form-email" class="grid grid-2 gap-2">
            <div class="form-group" style="grid-column: span 2">
                <label class="form-label">Hedef Kitle / Alici Listesi</label>
                <select id="email-target" class="form-select">
                    <option>Özel Hastaneler Başhekimlik (1.250 Kişi)</option>
                    <option>Wolf Makina Bayileri (450 Kişi)</option>
                    <option>Nörologlar Kongre Kayıtları (2.550 Kişi)</option>
                    <option>Mevcut Müşteri Veritabanı</option>
                </select>
            </div>
            <div class="form-group" style="grid-column: span 2">
                <label class="form-label">Mail Konusu (Subject)</label>
                <input id="email-subject" type="text" class="form-input" placeholder="Örn: Yeni Nesil Neuro One Tanıtım Toplantısı">
            </div>
            <div class="form-group" style="grid-column: span 2">
                <label class="form-label">Mail İçeriği</label>
                <textarea id="email-content" class="form-textarea" rows="6" placeholder="Sayın ilgili,\nBiyosera Medikal olarak alanındaki en yeni inovasyonlarımızdan bahsetmekten kıvanç duyuyoruz...\nSaygılarımızla,\nSatış Departmanı"></textarea>
            </div>
            <div class="form-group" style="grid-column: span 2; padding: 15px; border: 1px dashed var(--border); border-radius: 8px; font-size: 0.9rem; color: var(--text-muted); text-align: center; cursor: pointer;" onclick="alert('Dosya yükleme penceresi açılacak')">
                <span style="color: var(--warning)">Evrak Ekle (Örn: Seçkin PDF Dokümanı)</span> 📎
            </div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('email-campaign')">Kampanyayı Başlat / Gönder</button></div>
        `;
    }
    else if (type === 'income') {
        title.innerText = 'Gelir Ekle';
        body.innerHTML = `
        <form id="form-income" class="grid grid-2 gap-2">
                <div class="form-group" style="grid-column: span 2"><label class="form-label">Kategori</label><select id="income-category" class="form-select">
                    <option>Cihaz Satışı</option>
                    <option>Aksesuar Satışı</option>
                    <option>Yedek Parça</option>
                    <option>Servis Bakım</option>
                    <option>Tamir Destek</option>
                    <option>Diğer Gelir</option>
                </select></div>
                <div class="form-group"><label class="form-label">Tutar (₺)</label><input id="income-amount" type="number" class="form-input"></div>
                <div class="form-group"><label class="form-label">İşlem Tarihi</label><input id="income-date" type="date" class="form-input" value="${new Date().toISOString().split('T')[0]}"></div>
                <div class="form-group" style="grid-column: span 2"><label class="form-label">Paranın Geleceği Tarih (Vade)</label><input id="income-due-date" type="date" class="form-input" value="${new Date().toISOString().split('T')[0]}"></div>
                <div class="form-group" style="grid-column:span 2"><label class="form-label">Açıklama</label><input id="income-desc" type="text" class="form-input"></div>
            </form>
        <div class="flex justify-end mt-2"><button class="btn btn-success w-100" onclick="handleFormSubmit('income')">Geliri Kaydet</button></div>
    `;
    }
    else if (type === 'expense') {
        title.innerText = 'Gider / Çıkart Ekle';
        body.innerHTML = `
        <form id="form-expense" class="grid grid-2 gap-2">
                <div class="form-group"><label class="form-label">Kategori</label><select id="expense-category" class="form-select">
                    <option>Personel / Maaş</option>
                    <option>Kira / Ofis</option>
                    <option>Vergi / SGK</option>
                    <option>Hammadde / Satın Alma</option>
                    <option>Lojistik</option>
                    <option>Diğer Gider</option>
                </select></div>
                <div class="form-group"><label class="form-label">Tutar (₺)</label><input id="expense-amount" type="number" class="form-input"></div>
                <div class="form-group"><label class="form-label">İşlem Tarihi</label><input id="expense-date" type="date" class="form-input" value="${new Date().toISOString().split('T')[0]}"></div>
                <div class="form-group"><label class="form-label">Ödenmesi Gereken Tarih</label><input id="expense-due-date" type="date" class="form-input" value="${new Date().toISOString().split('T')[0]}"></div>
                <div class="form-group" style="grid-column:span 2"><label class="form-label">Açıklama</label><input id="expense-desc" type="text" class="form-input"></div>
            </form>
        <div class="flex justify-end mt-2"><button class="btn btn-danger w-100" onclick="handleFormSubmit('expense')">Gideri Kaydet</button></div>
    `;
    }
    else if (type === 'service-form') {
        title.innerText = 'Servis Formu';
        body.innerHTML = `
        <form id="form-service" class="grid grid-2 gap-2">
                <div class="form-group"><label class="form-label">Müşteri</label><select id="srv-customer" class="form-select">${AppData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
                <div class="form-group"><label class="form-label">Cihaz</label><select id="srv-product" class="form-select">${AppData.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select></div>
                <div class="form-group"><label class="form-label">İşlem</label><select id="srv-type" class="form-select"><option>Bakım</option><option>Arıza</option></select></div>
                <div class="form-group"><label class="form-label">Sonraki Bakım</label><input id="srv-nextdate" type="date" class="form-input"></div>
                <div class="form-group" style="grid-column: span 2"><label class="form-label">Notlar</label><textarea id="srv-notes" class="form-textarea"></textarea></div>
                <div class="form-group" style="grid-column: span 2; border: 1px dashed var(--border); padding: 1rem; text-align: center;">
                    <label class="form-label mb-1">Müşteri Onayı</label>
                    <div style="padding: 20px; background: #222; border-radius: 8px; cursor: pointer;" onclick="this.style.border='2px solid var(--primary)'; this.innerHTML='${Icons.check} İmzalandı';">
                        [İmza İçin Tıkla]
                    </div>
                </div>
            </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('service')">Kaydet</button></div>
    `;
    }
    else if (type === 'hr-add') {
        title.innerText = 'Personel Ekle';
        body.innerHTML = `
        <form id="form-hr" class="grid grid-2 gap-2">
                <div class="form-group"><label class="form-label">Ad Soyad</label><input id="hr-name" type="text" class="form-input"></div>
                <div class="form-group"><label class="form-label">Departman</label><select id="hr-dept" class="form-select"><option>Yazılım</option><option>Satış</option><option>Ar-Ge</option><option>HR</option><option>Finans</option></select></div>
                <div class="form-group"><label class="form-label">Durum</label><select id="hr-status" class="form-select"><option>Aktif</option><option>İzinli</option></select></div>
                <div class="form-group"><label class="form-label">Pozisyon</label><input id="hr-pos" type="text" class="form-input"></div>
            </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('hr')">Kaydet</button></div>
    `;
    }
    else if (type === 'customer') {
        title.innerText = 'Yeni Müşteri Ekle';
        body.innerHTML = `
        <form id="form-customer" class="grid grid-2 gap-2">
            <div class="form-group"><label class="form-label">Kurum Adı</label><input id="cust-name" type="text" class="form-input" placeholder="Örn: İstanbul Hastanesi"></div>
            <div class="form-group"><label class="form-label">Şehir</label><input id="cust-city" type="text" class="form-input" placeholder="İstanbul"></div>
            <div class="form-group"><label class="form-label">Tip</label><select id="cust-type" class="form-select"><option>Hastane</option><option>Klinik</option><option>Üniversite</option><option>Kamu</option><option>Özel</option></select></div>
            <div class="form-group"><label class="form-label">İlgili Kişi</label><input id="cust-contact" type="text" class="form-input" placeholder="Ad Soyad"></div>
            <div class="form-group" style="grid-column: span 2"><label class="form-label">Telefon Numarası</label><input id="cust-phone" type="text" class="form-input" placeholder="+90 5XX XXX XX XX"></div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('customer')">Müşteri Ekle</button></div>
        `;
    }
    else if (type === 'product') {
        title.innerText = 'Yeni Ürün Ekle';
        body.innerHTML = `
        <form id="form-product" class="grid grid-2 gap-2">
            <div class="form-group" style="grid-column: span 2"><label class="form-label">Ürün Adı</label><input id="prod-name" type="text" class="form-input" placeholder="Neuro One V4"></div>
            <div class="form-group"><label class="form-label">Fiyat (₺)</label><input id="prod-price" type="number" class="form-input" placeholder="450000"></div>
            <div class="form-group"><label class="form-label">Stok Adedi</label><input id="prod-stock" type="number" class="form-input" placeholder="10"></div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('product')">Ürün Ekle</button></div>
        `;
    }
    else if (type === 'email-campaign') {
        title.innerText = 'Yeni Mail Kampanyası';
        body.innerHTML = `
        <form id="form-email-campaign" class="grid grid-2 gap-2">
            <div class="form-group" style="grid-column: span 2"><label class="form-label">Kampanya Adı</label><input type="text" class="form-input" placeholder="Örn: Neuro One V5 Lansman"></div>
            <div class="form-group"><label class="form-label">Hedef Kitle</label><select class="form-select"><option>Tüm Bayiler</option><option>Özel Hastaneler Başhekimlik</option><option>Nörologlar Kongresi</option></select></div>
            <div class="form-group"><label class="form-label">Tarih</label><input type="date" class="form-input" value="${new Date().toISOString().split('T')[0]}"></div>
            <div class="form-group" style="grid-column: span 2"><label class="form-label">Mail Konusu</label><input type="text" class="form-input" placeholder="Biyosera ile yeni teknolojiye merhaba deyin."></div>
            <div class="form-group" style="grid-column: span 2"><label class="form-label">İçerik</label><textarea class="form-input" rows="3" placeholder="Gülümse... Yeni bir dönem başlıyor."></textarea></div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-warning w-100" onclick="closeModal(); alert('Kampanya başlatıldı. Gönderim sırasına alındı.')">Gönderimi Başlat</button></div>
        `;
    }
    else if (type === 'travel') {
        title.innerText = 'Yeni Seyahat / Görev Planla';
        body.innerHTML = `
        <form id="form-travel" class="grid grid-2 gap-2">
            <div class="form-group"><label class="form-label">Personel (Kim?)</label><select class="form-select">${AppData.employees.map(e => `<option>${e.name}</option>`).join('')}</select></div>
            <div class="form-group"><label class="form-label">Araç Plakası / Ulaşım</label><input type="text" class="form-input" placeholder="Örn: 34 BSY 145 veya THY Uçuş"></div>
            
            <div class="form-group" style="grid-column: span 2"><label class="form-label">Kurum (Nereye?)</label><input type="text" class="form-input" placeholder="Örn: Kayseri Şehir Hastanesi"></div>
            
            <div class="form-group"><label class="form-label">Başlangıç Tarihi</label><input type="date" class="form-input" value="${new Date().toISOString().split('T')[0]}"></div>
            <div class="form-group"><label class="form-label">Süre (Gün)</label><input type="number" class="form-input" placeholder="Örn: 3" value="1"></div>
            
            <div class="form-group"><label class="form-label">Görev Özeti</label><input type="text" class="form-input" placeholder="Örn: Neuro One Demoları"></div>
            <div class="form-group"><label class="form-label">İş Önceliği</label><select class="form-select"><option>Kritik</option><option>Yüksek</option><option>Normal</option><option>Düşük</option></select></div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="closeModal(); showToast('Seyahat planı sisteme işlendi.', 'success'); loadPage('seyahat');">Seyahat Planla</button></div>
        `;
    }
    else if (type === 'project') {
        title.innerText = 'Yeni Proje Yönetimi';
        body.innerHTML = `
        <form class="grid grid-2 gap-2">
            <div class="form-group" style="grid-column: span 2"><label class="form-label">Proje Adı</label><input id="prj-name" type="text" class="form-input" placeholder="Örn: Şehir Hastaneleri Entegrasyonu"></div>
            <div class="form-group"><label class="form-label">Proje Yöneticisi</label><select id="prj-manager" class="form-select">${AppData.employees.map(e => `<option>${e.name}</option>`).join('')}</select></div>
            <div class="form-group"><label class="form-label">Durum</label><select id="prj-status" class="form-select"><option>Aktif</option><option>Beklemede</option><option>Tamamlandı</option></select></div>
            <div class="form-group"><label class="form-label">Başlangıç Tarihi</label><input id="prj-start" type="date" class="form-input"></div>
            <div class="form-group"><label class="form-label">Bitiş Tarihi</label><input id="prj-end" type="date" class="form-input"></div>
            <div class="form-group" style="grid-column: span 2"><label class="form-label">İlerleme Durumu (%)</label><input id="prj-progress" type="range" min="0" max="100" value="0" class="form-input" oninput="this.nextElementSibling.innerText = this.value + '%'"> <span class="bold">0%</span></div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-primary w-100" onclick="handleFormSubmit('project')">Projeyi Kaydet</button></div>
        `;
    }
    else if (type === 'check') {
        title.innerText = 'Evrak (Çek / Senet) Girişi';
        body.innerHTML = `
        <form class="grid grid-2 gap-2">
            <div class="form-group"><label class="form-label">Evrak Türü</label><select id="chk-type" class="form-select"><option>Müşteri Çeki</option><option>Banka Çeki</option><option>Senet</option></select></div>
            <div class="form-group"><label class="form-label">Kime Ait / Keşideci</label><input id="chk-owner" type="text" class="form-input"></div>
            <div class="form-group"><label class="form-label">Tutar (₺)</label><input id="chk-amount" type="number" class="form-input"></div>
            <div class="form-group"><label class="form-label">Vade Tarihi</label><input id="chk-due" type="date" class="form-input"></div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-success w-100" onclick="handleFormSubmit('check')">Evrağı Kaydet</button></div>
        `;
    }
    else if (type === 'purchase') {
        title.innerText = 'Yeni Satın Alma / Sipariş';
        body.innerHTML = `
        <form class="grid grid-2 gap-2">
            <div class="form-group"><label class="form-label">Tedarikçi Firma</label><input id="pur-supplier" type="text" class="form-input"></div>
            <div class="form-group"><label class="form-label">Ürün / Alım Kodu</label><input id="pur-code" type="text" class="form-input" placeholder="Örn: STK-9921"></div>
            <div class="form-group"><label class="form-label">Kategori</label><select id="pur-type" class="form-select"><option>Hammadde</option><option>Cihaz / İthalat</option><option>Sarf Malzeme</option></select></div>
            <div class="form-group"><label class="form-label">Tutar (₺)</label><input id="pur-amount" type="number" class="form-input"></div>
            <div class="form-group" style="grid-column: span 2"><label class="form-label">Tahmini Giriş / Teslim Tarihi</label><input id="pur-date" type="date" class="form-input"></div>
        </form>
        <div class="flex justify-end mt-2"><button class="btn btn-warning w-100" onclick="handleFormSubmit('purchase')">Siparişi Oluştur</button></div>
        `;
    }
}

// --- MODAL UTILS ---
function addProformaItemRow() {
    const container = document.getElementById('proforma-items-container');
    if (!container) return;
    const row = document.createElement('div');
    row.className = 'flex gap-1 proforma-item-row';
    row.style.alignItems = 'center';
    row.innerHTML = `
        <select class="form-select doc-item-product" style="flex: 3;">
            ${AppData.products.map(p => `<option value="${p.id}" data-price="${p.price}">${p.name} - ${formatCurrency(p.price)}</option>`).join('')}
        </select>
        <input type="number" class="form-input doc-item-qty" placeholder="Adet" value="1" min="1" style="flex: 1;">
        <input type="number" class="form-input doc-item-discount" placeholder="İskonto %" value="0" min="0" max="100" style="flex: 1;">
        <button type="button" class="btn btn-danger" onclick="this.parentElement.remove()" style="padding: 10px; flex: 0 0 40px;">X</button>
    `;
    container.appendChild(row);
}

function closeModal() {
    window.editingItemId = null;
    window.editingItemType = null;
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
}

function editItem(type, id) {
    window.editingItemId = id;
    window.editingItemType = type;
    openModal(type);
    setTimeout(() => {
        let item;
        switch (type) {
            case 'customer':
                item = AppData.customers.find(c => c.id === id);
                if (item) {
                    document.getElementById('cust-name').value = item.name;
                    document.getElementById('cust-city').value = item.city;
                    document.getElementById('cust-type').value = item.type;
                    document.getElementById('cust-contact').value = item.contact;
                    document.getElementById('cust-phone').value = item.phone;
                }
                break;
            case 'product':
                item = AppData.products.find(p => p.id === id);
                if (item) {
                    document.getElementById('prod-name').value = item.name;
                    document.getElementById('prod-price').value = item.price;
                    document.getElementById('prod-stock').value = item.stock;
                }
                break;
            case 'project':
                item = AppData.projects.find(p => p.id === id);
                if (item) {
                    document.getElementById('prj-name').value = item.name;
                    document.getElementById('prj-manager').value = item.lead || item.manager || '';
                    document.getElementById('prj-status').value = item.status;
                    document.getElementById('prj-start').value = item.startDate || '';
                    document.getElementById('prj-end').value = item.endDate || '';
                    document.getElementById('prj-progress').value = item.progress || 0;
                }
                break;
            case 'check':
                item = AppData.checks.find(c => c.id === id);
                if (item) {
                    document.getElementById('chk-type').value = item.type;
                    document.getElementById('chk-owner').value = item.owner || '';
                    document.getElementById('chk-amount').value = item.amount;
                    document.getElementById('chk-due').value = item.dueDate;
                }
                break;
            case 'purchase':
            case 'payable':
                item = AppData.payables.find(p => p.id === id);
                if (item) {
                    document.getElementById('pur-supplier').value = item.supplier;
                    document.getElementById('pur-type').value = item.type || '';
                    document.getElementById('pur-amount').value = item.amount;
                    document.getElementById('pur-date').value = item.dueDate;
                }
                break;
            case 'income':
                item = AppData.receivables.find(r => r.id === id);
                if (item) {
                    document.getElementById('income-amount').value = item.amount;
                    document.getElementById('income-date').value = item.date || item.dueDate;
                    document.getElementById('income-due-date').value = item.dueDate || '';
                    document.getElementById('income-desc').value = item.desc;
                }
                break;
            case 'expense':
                item = AppData.expenses.find(e => e.id === id);
                if (item) {
                    document.getElementById('expense-amount').value = item.amount;
                    document.getElementById('expense-category').value = item.category;
                    document.getElementById('expense-date').value = item.date;
                    document.getElementById('expense-desc').value = item.desc;
                }
                break;
            case 'hr':
                item = AppData.employees.find(e => e.id === id);
                if (item) {
                    document.getElementById('hr-name').value = item.name;
                    document.getElementById('hr-dept').value = item.dept;
                    document.getElementById('hr-status').value = item.status;
                    document.getElementById('hr-pos').value = item.pos;
                }
                break;
        }
    }, 100);
}

// --- PDF GENERATOR CORE ---
function generateAndPrintPDF(type) {
    // 1. Core Fields
    const customerId = parseInt(document.getElementById('doc-customer').value);
    const customer = AppData.customers.find(c => c.id === customerId);
    
    // Fallbacks just in case it's an older form or missing
    const docNo = document.getElementById('doc-no') ? document.getElementById('doc-no').value : 'DOC-001';
    const date = document.getElementById('doc-date') ? document.getElementById('doc-date').value : new Date().toISOString().split('T')[0];
    
    // Extended Form Fields (only exist if proforma/invoice/sartname modal is used)
    const attention = document.getElementById('doc-attention') ? document.getElementById('doc-attention').value : '';
    const currency = document.getElementById('doc-currency') ? document.getElementById('doc-currency').value : 'TRY';
    const validity = document.getElementById('doc-validity') ? document.getElementById('doc-validity').value : '15 Gün';
    const delivery = document.getElementById('doc-delivery') ? document.getElementById('doc-delivery').value : 'DAP - Hastane Teslim';
    const payment = document.getElementById('doc-payment') ? document.getElementById('doc-payment').value : '%100 Peşin';
    const notes = document.getElementById('doc-notes') ? document.getElementById('doc-notes').value : '';

    const currencySymbol = currency === 'USD' ? '$' : (currency === 'EUR' ? '€' : '₺');
    const currFormat = (val) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: currency }).format(val);

    let title = '';
    let content = '';

    // 2. Extract Items from DOM
    let itemsHTML = '';
    let subTotal = 0;
    
    // Check if we have dynamic rows
    const itemRows = document.querySelectorAll('.proforma-item-row');
    if (itemRows.length > 0) {
        let index = 1;
        itemRows.forEach(row => {
            const selectEl = row.querySelector('.doc-item-product');
            const qty = parseFloat(row.querySelector('.doc-item-qty').value) || 1;
            const discountPct = parseFloat(row.querySelector('.doc-item-discount').value) || 0;
            
            const prodName = selectEl.options[selectEl.selectedIndex].text.split(' - ')[0];
            const price = parseFloat(selectEl.options[selectEl.selectedIndex].dataset.price) || 0;
            
            const gross = price * qty;
            const discountAmount = gross * (discountPct / 100);
            const net = gross - discountAmount;
            subTotal += net;

            itemsHTML += `
                <tr>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:center;">${index++}</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; font-weight:600; color:#222;">${prodName}</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:center;">${qty}</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:right;">${currFormat(price)}</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:right;">%${discountPct}</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:right; font-weight:bold;">${currFormat(net)}</td>
                </tr>
            `;
        });
    } else {
        // Fallback for single product (legacy)
        const prodId = document.getElementById('doc-product') ? parseInt(document.getElementById('doc-product').value) : null;
        if (prodId) {
            const product = AppData.products.find(p => p.id === prodId);
            if (product) {
                subTotal = product.price;
                itemsHTML = `
                <tr>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:center;">1</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; font-weight:600; color:#222;">${product.name}</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:center;">1</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:right;">${currFormat(product.price)}</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:right;">%0</td>
                    <td style="padding:12px; border-bottom:1px solid #eaeaea; text-align:right; font-weight:bold;">${currFormat(product.price)}</td>
                </tr>`;
            }
        }
    }

    const tax = subTotal * 0.20; // 20% KDV
    const grandTotal = subTotal + tax;

    if (type === 'doc-invoice' || type === 'proforma') {
        title = type === 'doc-invoice' ? 'TİCARİ FATURA (COMMERCIAL INVOICE)' : 'PROFORMA FATURA (QUOTATION)';
        content = `
            <table style="width:100%; margin-bottom:30px; border-collapse: collapse; font-size:0.95rem;">
                <tr>
                    <td style="width:55%; vertical-align:top;">
                        <div style="background:#f8f9fa; padding:15px; border-radius:8px; border:1px solid #eaeaea;">
                            <strong style="color:#0b1e36; font-size:1.1rem;">Sayın / To:</strong><br>
                            <span style="font-size:1.1rem; font-weight:bold; display:block; margin-top:5px;">${customer.name}</span>
                            <span style="color:#555;">İlgili: ${attention || customer.contact}</span><br>
                            <span style="color:#555;">${customer.city} / ${customer.type}</span><br>
                            ${customer.phone ? `<span style="color:#555;">Tel: ${customer.phone}</span>` : ''}
                        </div>
                    </td>
                    <td style="width:5%;"></td>
                    <td style="width:40%; vertical-align:top;">
                        <table style="width:100%; border-collapse:collapse; background:#f8f9fa; border-radius:8px; border:1px solid #eaeaea; overflow:hidden;">
                            <tr><td style="padding:8px 15px; border-bottom:1px solid #eaeaea; color:#555;">Tarih / Date:</td><td style="padding:8px 15px; border-bottom:1px solid #eaeaea; font-weight:bold; text-align:right;">${formatDate(date)}</td></tr>
                            <tr><td style="padding:8px 15px; border-bottom:1px solid #eaeaea; color:#555;">Belge No / Ref:</td><td style="padding:8px 15px; border-bottom:1px solid #eaeaea; font-weight:bold; text-align:right;">${docNo}</td></tr>
                            <tr><td style="padding:8px 15px; border-bottom:1px solid #eaeaea; color:#555;">Geçerlilik / Validity:</td><td style="padding:8px 15px; border-bottom:1px solid #eaeaea; font-weight:bold; text-align:right;">${validity}</td></tr>
                            <tr><td style="padding:8px 15px; color:#555;">Para Birimi / Curr:</td><td style="padding:8px 15px; font-weight:bold; text-align:right; color:#0b1e36;">${currency}</td></tr>
                        </table>
                    </td>
                </tr>
            </table>
            
            <p style="margin-bottom:20px; font-size:1rem;">Talebiniz üzerine hazırlanan ürün ve cihaz fiyat teklifimiz aşağıda onayınıza sunulmuştur.</p>
            
            <!-- Items Table -->
            <table style="width:100%; border-collapse: collapse; text-align: left; margin-bottom:20px; font-size:0.95rem;">
                <thead>
                    <tr style="background:#0b1e36; color:white;">
                        <th style="padding:12px; text-align:center; width:5%;">#</th>
                        <th style="padding:12px; width:45%;">Ürün / Hizmet Açıklaması</th>
                        <th style="padding:12px; text-align:center; width:10%;">Miktar</th>
                        <th style="padding:12px; text-align:right; width:15%;">Birim Fiyat</th>
                        <th style="padding:12px; text-align:right; width:10%;">İsk.</th>
                        <th style="padding:12px; text-align:right; width:15%;">Net Tutar</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHTML}
                </tbody>
            </table>
            
            <!-- Totals Calculation -->
            <div style="display:flex; justify-content:flex-end;">
                <table style="width:40%; border-collapse: collapse; font-size:1rem;">
                    <tr>
                        <td style="padding:8px 15px; color:#555; border-bottom:1px solid #eaeaea;">Ara Toplam:</td>
                        <td style="padding:8px 15px; font-weight:bold; text-align:right; border-bottom:1px solid #eaeaea;">${currFormat(subTotal)}</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 15px; color:#555; border-bottom:1px solid #eaeaea;">KDV (%20):</td>
                        <td style="padding:8px 15px; text-align:right; border-bottom:1px solid #eaeaea;">${currFormat(tax)}</td>
                    </tr>
                    <tr style="background:#f8f9fa;">
                        <td style="padding:12px 15px; font-weight:bold; color:#0b1e36; font-size:1.2rem; border-bottom:2px solid #0b1e36;">GENEL TOPLAM:</td>
                        <td style="padding:12px 15px; font-weight:bold; text-align:right; color:#d63031; font-size:1.2rem; border-bottom:2px solid #0b1e36;">${currFormat(grandTotal)}</td>
                    </tr>
                </table>
            </div>

            <!-- Terms & Conditions -->
            <div style="margin-top:40px; font-size:0.85rem; border-top:1px solid #eaeaea; padding-top:20px;">
                <h4 style="margin:0 0 10px 0; color:#0b1e36;">TİCARİ ŞARTLAR (TERMS & CONDITIONS)</h4>
                <table style="width:100%; border-collapse: collapse;">
                    <tr><td style="width:25%; padding:4px 0; font-weight:bold; color:#555;">Teslimat Şartı:</td><td style="padding:4px 0;">${delivery}</td></tr>
                    <tr><td style="width:25%; padding:4px 0; font-weight:bold; color:#555;">Ödeme Şartı:</td><td style="padding:4px 0;">${payment}</td></tr>
                    <tr><td style="width:25%; padding:4px 0; font-weight:bold; color:#555;">Garanti Süresi:</td><td style="padding:4px 0;">Kurulum tarihinden itibaren 2 Yıl (Distribütör Garantisi)</td></tr>
                    ${notes ? `<tr><td style="width:25%; padding:4px 0; font-weight:bold; color:#555;">Ek Notlar:</td><td style="padding:4px 0; color:#d63031; font-weight:bold;">${notes}</td></tr>` : ''}
                </table>
            </div>
            
            <!-- Bank & Signature Block -->
            <table style="width:100%; margin-top:30px; font-size:0.85rem;">
                <tr>
                    <td style="width:50%; vertical-align:top; border:1px solid #eaeaea; padding:15px; background:#fafafa; border-radius:6px;">
                        <strong style="color:#0b1e36;">BANKA HESAP BİLGİLERİ (BANK DETAILS)</strong><br><br>
                        <strong>Alıcı Ünvan:</strong> BİYOSERA MEDİKAL SAN.TİC.LTD.ŞTİ.<br>
                        <strong>Banka:</strong> Garanti BBVA - Ostim Şb.<br>
                        <table style="width:100%; margin-top:5px; border-collapse: collapse;">
                            <tr><td style="color:#555; width:30%;">IBAN (TRY):</td><td><strong>TR12 3456 7890 0000 0000 00</strong></td></tr>
                            <tr><td style="color:#555;">IBAN (USD):</td><td><strong>TR12 3456 7890 0000 0001 00</strong></td></tr>
                            <tr><td style="color:#555;">IBAN (EUR):</td><td><strong>TR12 3456 7890 0000 0002 00</strong></td></tr>
                        </table>
                    </td>
                    <td style="width:5%;"></td>
                    <td style="width:45%; vertical-align:top; text-align:center; padding-top:20px;">
                        <strong>BİYOSERA MEDİKAL</strong><br>
                        <span style="color:#777;">Eren Çelikten - Genel Müdür</span>
                        <div style="margin-top:40px; border-bottom:1px solid #ccc; width:60%; margin-left:auto; margin-right:auto;"></div>
                        <span style="font-size:0.75rem; color:#999; display:block; margin-top:5px;">(Yetkili Kaşe ve İmza / Stamp & Signature)</span>
                    </td>
                </tr>
            </table>
        `;
    } else if (type === 'doc-sartname') {
        const prodId = document.getElementById('doc-product') ? parseInt(document.getElementById('doc-product').value) : null;
        const product = AppData.products.find(p => p.id === prodId) || {name: 'Cihaz'};
        title = 'TEKNİK ŞARTNAME & ÜRÜN BEYANI';
        content = `
            <h3 style="text-align:center; margin-bottom: 20px;">${product.name} - TEKNİK ÖZELLİKLERİ</h3>
            <ul style="line-height: 1.8; font-size: 1rem;">
                <li>Cihaz klinik ortamlara ve yoğun bakıma tam uyumlu medikal standartlarda üretilmiş olmalıdır.</li>
                <li>Hassas ölçüm sensörleri sayesinde anlık veriyi 0.1 saniye gecikmeyle aktarabilmelidir.</li>
                <li>Kullanıcı dostu arayüze sahip olup, acil durumlarda sesli ve ışıklı uyarı vermelidir.</li>
                <li>Cihazın CE ve yetkili tıbbi uygunluk sertifikalarına sahip olması zorunludur.</li>
                <li>Şebeke dalgalanmalarına karşı anlık koruma sağlayacak dahili bir regülatörü bulunmalıdır.</li>
                <li>Kutu içeriğinde sarf malzemeleri, güç kablosu ve detaylı kurulum dokümantasyonu eksiksiz yer almalıdır.</li>
            </ul>
            <div style="margin-top: 50px; font-size: 0.95rem;">
                <strong>Hazırlayan Firma:</strong> Biyosera Medikal San. ve Tic. Ltd. Şti.<br>
                <strong>Tarih:</strong> ${formatDate(date)}<br>
                <strong>Evrak Referans No:</strong> ${docNo}<br><br>
                <em>Onay Kutusu: [ &nbsp; ] Okudum, Onaylıyorum. YETKİLİ İMZA: ........................</em>
            </div>
        `;
    }

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>${title} - ${docNo}</title>
            <style>
                body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 2cm; color: #333; background: white; -webkit-print-color-adjust: exact; }
                .pdf-header { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 4px solid #0b1e36; padding-bottom: 15px; margin-bottom: 30px; }
                .pdf-logo { max-height: 55px; }
                .pdf-company-info { text-align: right; font-size: 0.85rem; color: #555; line-height: 1.4; }
                .pdf-title-box { text-align: center; margin-bottom: 30px; }
                .pdf-title-box h1 { margin: 0; color: #0b1e36; font-size: 24px; letter-spacing: 1px;}
                .pdf-footer { position: fixed; bottom: 1cm; left: 2cm; right: 2cm; text-align: center; font-size: 0.75rem; color: #aaa; border-top: 1px solid #eaeaea; padding-top: 10px; }
                @media print {
                    @page { margin: 0; size: A4; }
                    body { padding: 1.5cm; }
                }
            </style>
        </head>
        <body onload="setTimeout(() => { window.print(); }, 500)">
            <div class="pdf-header">
                <div><img src="assets/logo.png" class="pdf-logo" alt="Biyosera" onerror="this.src='../assets/logo.png'"></div>
                <div class="pdf-company-info">
                    <strong style="color:#0b1e36; font-size:0.95rem;">BİYOSERA MEDİKAL SAN. VE TİC. LTD. ŞTİ.</strong><br>
                    İvedik OSB Mah. 1354 Cad. No: 114<br>
                    Yenimahalle / ANKARA<br>
                    Tel: +90 312 395 00 00 | E-posta: info@biyosera.com<br>
                    VD: Ostim / VNo: 1770000000
                </div>
            </div>
            
            <div class="pdf-title-box">
                <h1>${title}</h1>

                <p>Belge Kayıt No: ${docNo} &nbsp;|&nbsp; Düzenleme Tarihi: ${formatDate(date)}</p>
            </div>
            
            <div class="pdf-content">
                ${content}
            </div>
            
            <div class="pdf-footer">
                Bu belge <strong style="color:#0b1e36;">Biyosera Kurumsal ERP Modülü</strong> tarafından ${formatDate(new Date())} tarihinde elektronik olarak üretilmiştir. Her hakkı saklıdır.
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    closeModal();
}

function handleFormSubmit(type) {
    const today = new Date().toISOString().split('T')[0];

    if (type === 'sale') {
        const customerId = parseInt(document.getElementById('sale-customer').value);
        const productId = parseInt(document.getElementById('sale-product').value);
        const amount = parseFloat(document.getElementById('sale-amount').value) || 0;
        const date = document.getElementById('sale-date').value || today;

        if (!amount) {
            alert('Lütfen tutar giriniz!');
            return;
        }

        // Satış ekle
        const newSale = {
            id: 100 + Date.now(),
            customerId: customerId,
            productId: productId,
            date: date,
            amount: amount,
            status: 'Yeni Sipariş'
        };
        AppData.sales.push(newSale);

        // Otomatik alacak kaydı oluştur
        AppData.receivables.push({
            id: Date.now(),
            customerId: customerId,
            amount: amount,
            dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 gün sonra
            status: 'Bekliyor',
            ref: 'FAT-' + new Date().getFullYear() + '-' + String(AppData.receivables.length + 1).padStart(3, '0')
        });

        saveData();
        closeModal();
        showToast('Satış kaydedildi! Alacak otomatik oluşturuldu.', 'success');
        loadPage('satis');
    }
    else if (type === 'income') {
        const amount = parseFloat(document.getElementById('income-amount').value) || 0;
        const category = document.getElementById('income-category').value;
        const date = document.getElementById('income-date').value || today;
        const dueDate = document.getElementById('income-due-date').value || date;
        const desc = document.getElementById('income-desc').value || 'Gelir';

        if (!amount) {
            alert('Lütfen tutar giriniz!');
            return;
        }

        let newItem = {
            amount: amount,
            date: date,
            dueDate: dueDate,
            desc: desc.startsWith(category) ? desc : (category + ' - ' + desc)
        };

        if (window.editingItemId) {
            let exist = AppData.receivables.find(r => r.id === window.editingItemId);
            if(exist) Object.assign(exist, newItem);
        } else {
            newItem.id = Date.now();
            newItem.customerId = 0;
            newItem.status = 'Bekliyor';
            newItem.ref = generateRef('GEL');
            AppData.receivables.push(newItem);
        }

        saveData();
        closeModal();
        showToast('Gelir (Alacak) kaydedildi: ' + formatCurrency(amount), 'success');
        loadPage('finansal');
    }
    else if (type === 'expense') {
        const amount = parseFloat(document.getElementById('expense-amount').value) || 0;
        const category = document.getElementById('expense-category').value;
        const date = document.getElementById('expense-date').value || today;
        const dueDate = document.getElementById('expense-due-date').value || date;
        const desc = document.getElementById('expense-desc').value || 'Gider';

        if (!amount) {
            alert('Lütfen tutar giriniz!');
            return;
        }

        let expItem = { category: category, amount: amount, date: date, desc: desc };
        let payItem = { supplier: desc, amount: amount, dueDate: dueDate, type: category };

        if (window.editingItemId) {
            let existExp = AppData.expenses.find(e => e.id === window.editingItemId);
            if (existExp) {
                // Find matching payable roughly
                let existPay = AppData.payables.find(p => p.supplier === existExp.desc && p.amount === existExp.amount);
                Object.assign(existExp, expItem);
                if (existPay) Object.assign(existPay, payItem);
            }
        } else {
            expItem.id = Date.now();
            expItem.ref = generateRef('GID');
            AppData.expenses.push(expItem);

            payItem.id = Date.now() + 1;
            payItem.status = 'Bekliyor';
            payItem.ref = generateRef('MAS');
            AppData.payables.push(payItem);
        }

        saveData();
        closeModal();
        showToast('Gider kaydedildi: ' + formatCurrency(amount), 'danger');
        loadPage('finansal');
    }
    else if (type === 'service') {
        const customerId = parseInt(document.getElementById('srv-customer').value);
        const productId = parseInt(document.getElementById('srv-product').value);
        const srvType = document.getElementById('srv-type').value;
        const nextDate = document.getElementById('srv-nextdate').value || today;
        const notes = document.getElementById('srv-notes').value || '';

        // En son satışı bul veya yeni oluştur
        let saleId = AppData.sales.find(s => s.customerId === customerId && s.productId === productId)?.id;
        if (!saleId) {
            saleId = 100 + Date.now();
        }

        AppData.maintenance.push({
            id: Date.now(),
            saleId: saleId,
            nextDate: nextDate,
            type: srvType,
            status: 'Planlandı',
            notes: notes
        });

        saveData();
        closeModal();
        showToast('Servis kaydı oluşturuldu!', 'success');
        loadPage('servis');
    }
    else if (type === 'hr') {
        const name = document.getElementById('hr-name').value;
        const dept = document.getElementById('hr-dept').value;
        const pos = document.getElementById('hr-pos').value;
        const status = document.getElementById('hr-status').value;

        if (!name) {
            alert('Lütfen ad soyad giriniz!');
            return;
        }

        let newItem = { name: name, dept: dept, pos: pos, status: status };
        if (window.editingItemId) {
            let exist = AppData.employees.find(e => e.id === window.editingItemId);
            if (exist) Object.assign(exist, newItem);
        } else {
            newItem.id = 100 + AppData.employees.length + 1;
            newItem.salary = 50000;
            newItem.start = today;
            AppData.employees.push(newItem);
        }

        saveData();
        closeModal();
        showToast('Personel eklendi: ' + name, 'success');
        loadPage('personel');
    }
    else if (type === 'project') {
        const name = document.getElementById('prj-name').value;
        const manager = document.getElementById('prj-manager').value;
        const start = document.getElementById('prj-start').value;
        const end = document.getElementById('prj-end').value;
        const status = document.getElementById('prj-status').value;
        const progress = document.getElementById('prj-progress').value;

        if (!name) return alert('Proje adı giriniz.');

        if (!AppData.projects) AppData.projects = [];
        let newItem = {
            name: name, manager: manager, startDate: start, endDate: end, status: status, progress: progress
        };
        if (window.editingItemId) {
            let exist = AppData.projects.find(p => p.id === window.editingItemId);
            if (exist) Object.assign(exist, newItem);
        } else {
            newItem.id = Date.now();
            newItem.ref = generateRef('PRO');
            AppData.projects.push(newItem);
        }
        saveData();
        closeModal();
        showToast('Proje başarıyla kaydedildi.', 'success');
        loadPage('projeler');
    }
    else if (type === 'check') {
        const checkType = document.getElementById('chk-type').value;
        const owner = document.getElementById('chk-owner').value;
        const amount = parseFloat(document.getElementById('chk-amount').value) || 0;
        const dueDate = document.getElementById('chk-due').value;

        if (!amount || !owner) return alert('Lütfen bilgileri doldurunuz.');

        if (!AppData.checks) AppData.checks = [];
        let newItem = { type: checkType, owner: owner, amount: amount, dueDate: dueDate };
        if (window.editingItemId) {
            let exist = AppData.checks.find(c => c.id === window.editingItemId);
            if (exist) Object.assign(exist, newItem);
        } else {
            newItem.id = Date.now();
            newItem.status = 'Portföyde';
            newItem.ref = generateRef('EVR');
            AppData.checks.push(newItem);
        }
        saveData();
        closeModal();
        showToast('Evrak kaydedildi.', 'success');
        loadPage('cek-senet');
    }
    else if (type === 'purchase') {
        const supplier = document.getElementById('pur-supplier').value;
        const prodCode = document.getElementById('pur-code').value;
        const amount = parseFloat(document.getElementById('pur-amount').value) || 0;
        const typeCat = document.getElementById('pur-type').value;
        const inDate = document.getElementById('pur-date').value;

        if (!supplier || !amount) return alert('Lütfen bilgileri doldurunuz.');

        let newItem = { supplier: supplier, amount: amount, dueDate: inDate, type: typeCat };
        if (window.editingItemId) {
            let exist = AppData.payables.find(p => p.id === window.editingItemId);
            if (exist) Object.assign(exist, newItem);
        } else {
            newItem.id = Date.now();
            newItem.status = 'Bekliyor';
            newItem.ref = generateRef('ALM');
            AppData.payables.push(newItem);
        }
        saveData();
        closeModal();
        showToast('Sipariş kaydedildi.', 'success');
        loadPage('satin-alma');
    }
    else if (type === 'customer') {
        const name = document.getElementById('cust-name').value;
        const city = document.getElementById('cust-city').value;
        const custType = document.getElementById('cust-type').value;
        const contact = document.getElementById('cust-contact').value;
        const phone = document.getElementById('cust-phone').value;

        if (!name) {
            alert('Lütfen kurum adı giriniz!');
            return;
        }

        let newItem = { name: name, city: city, type: custType, contact: contact, phone: phone };
        if (window.editingItemId) {
            let exist = AppData.customers.find(c => c.id === window.editingItemId);
            if (exist) Object.assign(exist, newItem);
        } else {
            newItem.id = AppData.customers.length + 1;
            AppData.customers.push(newItem);
        }

        saveData();
        closeModal();
        showToast('Müşteri eklendi: ' + name, 'success');
        loadPage('musteriler');
    }
    else if (type === 'product') {
        const name = document.getElementById('prod-name').value;
        const price = parseFloat(document.getElementById('prod-price').value) || 0;
        const stock = parseInt(document.getElementById('prod-stock').value) || 0;

        if (!name || !price) {
            alert('Lütfen ürün adı ve fiyat giriniz!');
            return;
        }

        let newItem = { name: name, price: price, stock: stock };
        if (window.editingItemId) {
            let exist = AppData.products.find(p => p.id === window.editingItemId);
            if (exist) Object.assign(exist, newItem);
        } else {
            newItem.id = AppData.products.length + 1;
            AppData.products.push(newItem);
        }

        saveData();
        closeModal();
        showToast('Ürün eklendi: ' + name, 'success');
        loadPage('uretim');
    }
    else if (type === 'email-campaign') {
        const target = document.getElementById('email-target').value;
        const subject = document.getElementById('email-subject').value;
        const content = document.getElementById('email-content').value;

        if (!subject || !content) {
            alert('Lütfen mail konusu ve içeriğini doldurun!');
            return;
        }

        closeModal();
        showToast('Mail kampanyası kuyruğa eklendi. Tüm kayıtlı adreslere gönderiliyor.', 'success');
    }
    else {
        saveData();
        closeModal();
        showToast('İşlem kaydedildi.', 'info');
    }
}

// Toast Notification System
function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const colors = {
        success: '#33D69F',
        danger: '#FF5263',
        warning: '#FFB946',
        info: '#479CFF'
    };

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;

    // Add animation keyframes
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Delete functions
function deleteItem(type, id) {
    if (!confirm('Bu kaydı silmek istediğinizden emin misiniz?')) return;

    switch (type) {
        case 'customer':
            AppData.customers = AppData.customers.filter(c => c.id !== id);
            loadPage('musteriler');
            break;
        case 'product':
            AppData.products = AppData.products.filter(p => p.id !== id);
            loadPage('stok');
            break;
        case 'sale':
            AppData.sales = AppData.sales.filter(s => s.id !== id);
            loadPage('satis');
            break;
        case 'employee':
            AppData.employees = AppData.employees.filter(e => e.id !== id);
            loadPage('personel');
            break;
        case 'expense':
            AppData.expenses = AppData.expenses.filter(e => e.id !== id);
            loadPage('masraflar');
            break;
        case 'receivable':
            AppData.receivables = AppData.receivables.filter(r => r.id !== id);
            loadPage('finansal');
            break;
        case 'payable':
            AppData.payables = AppData.payables.filter(p => p.id !== id);
            loadPage('satin-alma');
            break;
        case 'travel':
            AppData.travels = AppData.travels.filter(t => t.id !== id);
            loadPage('seyahat');
            break;
        case 'account':
            AppData.accounts = AppData.accounts.filter(a => a.id !== id);
            loadPage('gelir-gider');
            break;
        case 'project':
            AppData.projects = AppData.projects.filter(p => p.id !== id);
            loadPage('projeler');
            break;
        case 'check':
            AppData.checks = AppData.checks.filter(c => c.id !== id);
            loadPage('cek-senet');
            break;
    }

    saveData();
    showToast('Kayıt silindi.', 'warning');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

// Close mobile menu when clicking a nav item
function setupMobileNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                toggleMobileMenu();
            }
        });
    });
}

// --- AUTHENTICATION SYSTEM ---
const AUTH_KEY = 'biyosera_auth';

function checkAuth() {
    const authData = localStorage.getItem(AUTH_KEY);
    if (!authData) return false;

    try {
        const parsed = JSON.parse(authData);
        if (parsed.isLoggedIn && parsed.username) {
            return parsed;
        }
    } catch (e) { /* ignore */ }
    return false;
}

function applyRBAC(role) {
    const navItems = document.querySelectorAll('.nav-item');

    // Varsayılan erişilebilen menüler (Herkes için)
    const baseAccess = ['dashboard', 'ayarlar'];

    // Role özgü yetki listesi
    const rolePermissions = {
        'admin': 'ALL', // Her yere girebilir
        'sales': ['dashboard', 'satis', 'musteriler', 'projeler', 'stok', 'sartnameler', 'mail', 'documents'],
        'finance': ['dashboard', 'muhasebe', 'cek-senet', 'gelir-gider', 'finansal', 'masraflar', 'faturalar', 'alim', 'personel', 'onay', 'documents']
    };

    const allowed = rolePermissions[role] || baseAccess;

    navItems.forEach(item => {
        const page = item.dataset.page;
        // Çıkış butonu gibi data-page'i olmayan item'lar açık kalır
        if (!page) {
            item.style.display = 'flex';
            return;
        }

        if (allowed === 'ALL' || allowed.includes(page) || baseAccess.includes(page)) {
            item.style.display = 'flex';
            item.parentElement.style.display = 'block'; // Üst başlık bölmesini (nav-section) de göster
        } else {
            item.style.display = 'none';
        }
    });

    // Boş kalan nav-section'ları gizle
    const sections = document.querySelectorAll('.nav-section');
    sections.forEach(sec => {
        const visibleItems = sec.querySelectorAll('.nav-item[style="display: flex;"]');
        if (visibleItems.length === 0 && sec.querySelector('.nav-item')) {
            sec.style.display = 'none';
        } else {
            sec.style.display = 'block';
        }
    });
}

function handleLogin(e) {
    if (e) e.preventDefault();
    const userField = document.getElementById('loginUsername');
    const passField = document.getElementById('loginPassword');
    const errorMsg = document.getElementById('authErrorMsg');

    // Dinamik kullanıcı veritabanı kontrolü (AppData.users)
    const userQuery = userField.value.trim();
    const passQuery = passField.value;

    const foundUser = AppData.users.find(u => u.username === userQuery && u.password === passQuery && u.status === 'Aktif');

    if (foundUser) {
        errorMsg.classList.remove('active');
        localStorage.setItem(AUTH_KEY, JSON.stringify({
            isLoggedIn: true,
            username: foundUser.username,
            name: foundUser.name,
            role: foundUser.role
        }));

        // Hide login, show app
        document.getElementById('authOverlay').classList.add('hidden');
        document.getElementById('appContainer').style.display = 'flex';

        applyRBAC(foundUser.role);

        // Initialize App Operations
        initApp();
        setupMobileNavigation();

        const avatar = document.querySelector('.user-avatar');
        if (avatar && foundUser.name) {
            avatar.textContent = foundUser.name.substring(0, 2).toUpperCase();
        }

    } else {
        errorMsg.classList.add('active');
        // Add shake animation
        const card = document.querySelector('.auth-card');
        card.style.animation = 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both';
        setTimeout(() => card.style.animation = '', 400);
    }
}

function handleLogout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.reload();
}

// Global hook for the exit button
window.logoutApp = handleLogout;

document.addEventListener('DOMContentLoaded', () => {
    // Add keyframes for shake if not present
    if (!document.getElementById('shakeKeyframes')) {
        const style = document.createElement('style');
        style.id = 'shakeKeyframes';
        style.innerHTML = `
            @keyframes shake {
                10%, 90% { transform: translate3d(-1px, 0, 0); }
                20%, 80% { transform: translate3d(2px, 0, 0); }
                30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                40%, 60% { transform: translate3d(4px, 0, 0); }
            }
        `;
        document.head.appendChild(style);
    }

    const session = checkAuth();
    if (session) {
        // User is logged in, hide overlay and init app
        document.getElementById('authOverlay').classList.add('hidden');
        document.getElementById('appContainer').style.display = 'flex';

        applyRBAC(session.role);
        initApp();
        setupMobileNavigation();

        // Update user avatar initials
        const avatar = document.querySelector('.user-avatar');
        if (avatar && session.name) {
            avatar.textContent = session.name.substring(0, 2).toUpperCase();
        } else if (avatar && session.username) {
            avatar.textContent = session.username.substring(0, 2).toUpperCase();
        }
    } else {
        // Show login
        document.getElementById('authOverlay').classList.remove('hidden');
        document.getElementById('appContainer').style.display = 'none';

        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', handleLogin);
        }
    }
});

// --- EK MODÜLLER (app-modules.js'den aktarıldı) ---

// --- MODULE: PURCHASING ---
function renderPurchasing() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Satın Alma & Tedarik</h2>
                <p class="text-muted">Hammadde, cihaz ve medikal malzeme siparişleri</p>
            </div>
            <button class="btn btn-warning" onclick="openModal('purchase')">
                ${Icons.plus} Yeni Sipariş
            </button>
        </div>
        
        <div class="grid grid-3 mb-2">
            <div class="stat-card"><div class="stat-value text-warning">₺45,000</div><div class="stat-label">Bekleyen Siparişler</div></div>
            <div class="stat-card"><div class="stat-value">5</div><div class="stat-label">Aktif Tedarikçi</div></div>
            <div class="stat-card"><div class="stat-value text-danger">2</div><div class="stat-label">Geciken Teslimat</div></div>
        </div>

        <div class="card">
            <div class="card-header"><h3>Tedarikçi Listesi ve Borçlar</h3></div>
            <div class="table-container">
                <table>
                    <thead><tr><th>Tedarikçi</th><th>Kategori</th><th>Borç</th><th>Vade</th><th>Kalan Gün</th><th>Durum</th><th>İşlem</th></tr></thead>
                    <tbody>
                        ${AppData.payables.map(p => `
                            <tr>
                                <td>${p.supplier}</td>
                                <td>${p.type}</td>
                                <td class="text-danger bold">${formatCurrency(p.amount)}</td>
                                <td>${formatDate(p.dueDate)}</td>
                                <td>${getDaysRemaining(p.dueDate)}</td>
                                <td><span class="badge badge-warning">${p.status}</span></td>
                                <td>
                                    <button class="btn btn-warning btn-sm" onclick="editItem('purchase', ${p.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-danger btn-sm" onclick="deleteItem('payable', ${p.id})">Sil</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: PRODUCTION ---
function renderProduction() {
    const totalStockValue = AppData.products.reduce((sum, p) => sum + (p.price * p.stock), 0);
    return `
        <div class="flex-between mb-2">
            <div><h2>Üretim Hattı & Stok</h2><p class="text-muted">Cihaz montaj, stok ve kalite kontrol</p></div>
            <div class="flex gap-1"><button class="btn btn-primary" onclick="openModal('product')">${Icons.plus} Ürün Ekle</button></div>
        </div>
        <div class="grid grid-3 mb-2">
            <div class="stat-card"><div class="stat-value">${AppData.products.length}</div><div class="stat-label">Ürün Çeşidi</div></div>
            <div class="stat-card"><div class="stat-value">${AppData.products.reduce((sum, p) => sum + p.stock, 0)}</div><div class="stat-label">Toplam Stok</div></div>
            <div class="stat-card"><div class="stat-value text-success">${formatCurrency(totalStockValue)}</div><div class="stat-label">Stok Değeri</div></div>
        </div>
        <div class="card">
            <div class="card-header"><h3>Ürün Kataloğu</h3></div>
            <div class="table-container">
                <table>
                    <thead><tr><th>ID</th><th>Ürün Adı</th><th>Stok</th><th>Birim Fiyat</th><th>Toplam Değer</th><th>İşlemler</th></tr></thead>
                    <tbody>
                         ${AppData.products.map(p => `
                            <tr>
                                <td>#${p.id}</td><td><strong>${p.name}</strong></td>
                                <td class="${p.stock < 10 ? 'text-danger bold' : 'bold'}">${p.stock} Adet</td>
                                <td>${formatCurrency(p.price)}</td><td class="text-success">${formatCurrency(p.price * p.stock)}</td>
                                <td><button class="btn btn-warning btn-sm" onclick="editItem('product', ${p.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-danger btn-sm" onclick="deleteItem('product', ${p.id})">Sil</button></td>
                            </tr>
                         `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: HR ---
function renderHR() {
    const employees = AppData.employees || [];
    const totalSalary = employees.reduce((sum, e) => sum + (e.salary || 0), 0);
    return `
        <div class="flex-between mb-2">
            <div><h2>İnsan Kaynakları Yönetimi</h2><p class="text-muted">Personel özlük, izin ve performans takibi</p></div>
            <button class="btn btn-primary" onclick="openModal('hr-add')">${Icons.plus} Personel Ekle</button>
        </div>
        <div class="grid grid-4 mb-2">
            <div class="stat-card"><div class="stat-value">${employees.length}</div><div class="stat-label">Toplam Personel</div></div>
            <div class="stat-card"><div class="stat-value text-success">${employees.filter(e => e.status === 'Aktif').length}</div><div class="stat-label">Aktif Çalışan</div></div>
            <div class="stat-card"><div class="stat-value text-warning">${employees.filter(e => e.status === 'İzinli').length}</div><div class="stat-label">İzinli</div></div>
            <div class="stat-card"><div class="stat-value text-danger">₺${(totalSalary / 1000).toFixed(1)}K</div><div class="stat-label">Aylık Maaş Yükü</div></div>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>ID</th><th>Ad Soyad</th><th>Pozisyon</th><th>Departman</th><th>Maaş</th><th>Başlangıç</th><th>Durum</th><th>İşlem</th></tr></thead>
                    <tbody>
                        ${employees.map(e => `
                            <tr>
                                <td>#${e.id}</td><td><strong>${e.name}</strong></td><td>${e.pos}</td><td>${e.dept}</td>
                                <td>${formatCurrency(e.salary)}</td><td>${formatDate(e.start)}</td>
                                <td><span class="badge badge-${e.status === 'Aktif' ? 'success' : 'warning'}">${e.status}</span></td>
                                <td><button class="btn btn-warning btn-sm" onclick="editItem('hr', ${e.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-danger btn-sm" onclick="deleteItem('employee', ${e.id})">Sil</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: SIGNATURE ---
function renderSignature() {
    return `
         <div class="flex-between mb-2">
            <div><h2>İmza Sistemi & Servis Formları</h2><p class="text-muted">Dijital servis raporları ve müşteri onayı</p></div>
             <button class="btn btn-primary" onclick="openModal('service-form')">${Icons.plus} Yeni Servis Formu</button>
        </div>
        <div class="grid grid-2">
            <div class="card">
                <div class="card-header"><h3>Son İmzalanan Belgeler</h3></div>
                <div class="table-container">
                    <table>
                        <thead><tr><th>Belge No</th><th>Müşteri</th><th>Tarih</th><th>İmza</th><th>Durum</th></tr></thead>
                         <tbody>
                            <tr><td>SRV-2025-001</td><td>Acıbadem Maslak</td><td>22.12.2025</td><td><span class="badge badge-success">İmzalandı</span></td><td><button class="btn btn-sm btn-secondary">PDF</button></td></tr>
                             <tr><td>SRV-2025-002</td><td>Memorial Şişli</td><td>23.12.2025</td><td><span class="badge badge-warning">Bekliyor</span></td><td><button class="btn btn-sm btn-secondary">Gönder</button></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
             <div class="card">
                <div class="card-header"><h3>Hızlı Onay Bekleyenler</h3></div>
                 <div class="flex flex-col gap-1">
                    <div class="card p-2 flex-between" style="border:1px solid var(--border); padding: 16px;">
                         <div><strong>Neuro One Kurulumu</strong><br><small class="text-muted">Ankara Şehir Hastanesi</small></div>
                         <button class="btn btn-success btn-sm">Onayla & İmzala</button>
                    </div>
                     <div class="card p-2 flex-between" style="border:1px solid var(--border); padding: 16px;">
                         <div><strong>Yıllık Bakım Anlaşması</strong><br><small class="text-muted">Ege Üniversitesi</small></div>
                         <button class="btn btn-success btn-sm">Onayla & İmzala</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- MODULE: PROJECTS ---
function renderProjects() {
    return `
        <div class="flex-between mb-2">
            <div><h2>Proje Yönetimi</h2><p class="text-muted">Devam eden Ar-Ge ve kurulum projeleri</p></div>
            <button class="btn btn-primary" onclick="openModal('project')">${Icons.plus} Yeni Proje</button>
        </div>
        <div class="grid grid-2">
            ${AppData.projects.map(p => `
            <div class="card">
                <div class="card-header">
                    <h3>${p.name}</h3>
                    <span class="badge badge-${p.progress >= 100 ? 'success' : (p.progress > 50 ? 'info' : 'warning')}">%${p.progress} Tamamlandı</span>
                </div>
                <p class="text-muted mb-1">Yönetici: ${p.lead || p.manager}</p>
                <div style="background:#374151; height:8px; border-radius:4px; overflow:hidden;">
                    <div style="background:var(--${p.progress >= 100 ? 'success' : 'primary'}); width:${p.progress}%; height:100%;"></div>
                </div>
                <div class="mt-2 flex-between">
                    <span class="badge badge-secondary" style="background:rgba(255,255,255,0.05);">${p.ref || generateRef('PRO')}</span>
                    <div class="flex gap-1" style="align-items: center;">
                        <span class="text-muted" style="font-size: 0.85rem;">Bitiş: ${formatDate(p.deadline || p.endDate || p.startDate)}</span>
                        <button class="btn btn-warning btn-sm" onclick="editItem('project', ${p.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-sm btn-danger" style="margin-left: 10px;" onclick="deleteItem('project', ${p.id})">Sil</button>
                    </div>
                </div>
            </div>
            `).join('')}
        </div>
    `;
}

// --- MODULE: APPROVALS (ONAY MERKEZİ) ---
function renderApprovals() {
    return `
        <div class="flex-between mb-2">
            <div><h2>Onay Merkezi</h2><p class="text-muted">Bekleyen masraf, proje ve satın alma onayları</p></div>
        </div>
        <div class="grid grid-3 mb-2">
            <div class="d-card" style="border-top: 3px solid var(--danger);">
                <div class="d-card-title">Masraf Formları</div>
                <div class="d-value-large text-danger">4 <span style="font-size:1rem;font-weight:400;color:var(--text-muted);">Adet Tutar: ₺12.400</span></div>
            </div>
            <div class="d-card" style="border-top: 3px solid var(--warning);">
                <div class="d-card-title">Satın Alma Talepleri</div>
                <div class="d-value-large text-warning">2 <span style="font-size:1rem;font-weight:400;color:var(--text-muted);">Adet Onayda</span></div>
            </div>
            <div class="d-card" style="border-top: 3px solid var(--info);">
                <div class="d-card-title">Proforma Düşük İskonto</div>
                <div class="d-value-large text-info">1 <span style="font-size:1rem;font-weight:400;color:var(--text-muted);">Özel İskonto İstemi</span></div>
            </div>
        </div>
        <div class="card">
            <div class="card-header"><h3>Bekleyen Onaylar Listesi</h3></div>
            <div class="table-container">
                <table>
                    <thead><tr><th>Tarih</th><th>Departman</th><th>İşlem Tipi</th><th>Açıklama</th><th>Tutar</th><th>İşlem</th></tr></thead>
                    <tbody>
                        <tr><td>Bugün</td><td>Saha Satış</td><td>Masraf Talebi</td><td>Ahmet Yılmaz - Seyahat Gideri</td><td class="bold">₺4,500</td><td><button class="btn btn-success btn-sm">Onayla</button> <button class="btn btn-danger btn-sm">Reddet</button></td></tr>
                        <tr><td>Dün</td><td>Tedarik</td><td>Satın Alma</td><td>Mekatronik Parça (Almanya)</td><td class="bold">€2,400</td><td><button class="btn btn-success btn-sm">Onayla</button> <button class="btn btn-danger btn-sm">Reddet</button></td></tr>
                        <tr><td>20.12.2025</td><td>Operasyon</td><td>Ofis Gideri</td><td>Ortak Alan Sarf Malzeme</td><td class="bold">₺1,200</td><td><button class="btn btn-success btn-sm">Onayla</button> <button class="btn btn-danger btn-sm">Reddet</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: MAINTENANCE ---
function renderMaintenance() {
    return `
        <div class="flex-between mb-2">
            <div><h2>Bakım & Onarım</h2><p class="text-muted">Teknik servis operasyonları ve periyodik bakımlar</p></div>
            <div class="flex gap-1">
                <button class="btn btn-primary" onclick="openModal('service-form')">Müdahale Ekle / Bakım Planla</button>
            </div>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>Müşteri</th><th>Cihaz</th><th>İşlem Tipi</th><th>Teknisyen</th><th>Tarih</th><th>Durum</th></tr></thead>
                    <tbody>
                        ${AppData.maintenance.map(m => {
        const sale = AppData.sales.find(s => s.id === m.saleId);
        const custName = sale ? getCustomerName(sale.customerId) : '-';
        const prodName = sale ? getProductName(sale.productId) : '-';
        return `
                                <tr>
                                    <td>${custName}</td><td>${prodName}</td><td>${m.type}</td><td>Ali Veli</td>
                                    <td>${formatDate(m.nextDate)}</td><td><span class="badge badge-${m.status === 'Yaklaşıyor' ? 'warning' : 'info'}">${m.status}</span></td>
                                </tr>`;
    }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: REPORTS ---
function renderReports() {
    return `
        <div class="flex-between mb-2">
            <div><h2>Raporlar & Analizler</h2></div>
            <button class="btn btn-secondary">PDF İndir</button>
        </div>
        <div class="grid grid-2">
            <div class="card">
                <h3>Aylık Satış Dağılımı</h3>
                <div style="height:200px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">[Grafik Alanı: Satışlar Artış Trendinde]</div>
            </div>
            <div class="card">
                <h3>Gider Kalemleri</h3>
                <div style="height:200px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);">[Grafik Alanı: En büyük gider Ar-Ge]</div>
            </div>
        </div>
    `;
}

// --- MODULE: SETTINGS ---
function renderSettings() {
    return `
        <h2>Sistem Ayarları & Veritabanı Kontrolü</h2>
        <div class="card mt-1">
            <div class="form-group"><label class="form-label">Firma Adı</label><input type="text" class="form-input" value="BİYOSERA MEDİKAL TEKNOLOJİLERİ"></div>
            <div class="form-group"><label class="form-label">Varsayılan Para Birimi</label><select class="form-select"><option>TRY (₺)</option><option>USD ($)</option><option>EUR (€)</option></select></div>
            <div class="form-group"><label class="form-label">Tema</label><select class="form-select"><option>Koyu (Dark)</option><option>Açık (Light)</option></select></div>
            <button class="btn btn-primary mb-2">Ayarları Kaydet</button>
            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin: 20px 0;">
            <h3 style="color:var(--danger); margin-bottom:10px;">Veritabanı (LocalStorage) Yönetimi</h3>
            <p class="text-muted mb-2">Eğer bu platformu test yerine kendi verilerinizle gerçekten kullanmak istiyorsanız, önce her şeyi tamamen boşaltabilirsiniz.</p>
            <div class="grid grid-2 gap-2">
                <button class="btn btn-danger" style="padding:15px; font-weight:bold;" onclick="wipeAllData()">Tüm Verileri Sil (Bomboş Sisteme Geç)</button>
                <button class="btn btn-warning" style="padding:15px; font-weight:bold;" onclick="resetToFactoryData()">Fabrika Test Verilerine Geri Dön</button>
            </div>
        </div>
    `;
}

// --- MODULE: GELİR-GİDER & KASA (INCOME/EXPENSE & BANK) ---
function renderIncomeExpense() {
    const totalIncome = AppData.sales.reduce((sum, s) => sum + s.amount, 0) +
        AppData.receivables.filter(r => r.status === 'Tahsil Edildi').reduce((sum, r) => sum + r.amount, 0);
    const totalExpense = AppData.expenses.reduce((sum, e) => sum + e.amount, 0);
    const netProfit = totalIncome - totalExpense;

    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Kasa, Banka ve Nakit Akışı</h2>
                <p class="text-muted">Anlık şirket varlıkları ve gelir/gider dökümü</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-secondary" onclick="alert('Kasa/Banka Transferi')">Para Transferi</button>
                <button class="btn btn-success" onclick="openModal('income')">${Icons.plus} Gelir Ekle</button>
                <button class="btn btn-danger" onclick="openModal('expense')">${Icons.plus} Gider Ekle</button>
            </div>
        </div>
        
        <!-- Bank Accounts Section -->
        <h3 class="mb-1" style="font-size: 1rem; color: var(--text-muted); text-transform: uppercase;">Aktif Hesaplar</h3>
        <div class="grid grid-3 mb-2">
            ${AppData.accounts.map(acc => `
                <div class="card" style="border-top: 4px solid var(--${acc.type === 'Kasa' ? 'success' : 'primary'}); position: relative; overflow: hidden;">
                    <div style="position: absolute; right: -20px; top: -20px; opacity: 0.05; font-size: 100px;">
                         ${acc.type === 'Kasa' ? '₺' : '🏦'}
                    </div>
                    <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom: 4px;">${acc.type} Hesabı</div>
                    <h3 class="mb-1" style="font-size: 1.1rem;">${acc.name}</h3>
                    <div class="stat-value ${acc.currency === 'USD' ? 'text-warning' : ''}">${acc.currency === 'USD' ? '$' : '₺'}${acc.balance.toLocaleString('tr-TR')}</div>
                    <div class="flex justify-end mt-1"><button class="btn btn-sm btn-danger" style="padding: 2px 8px; font-size: 0.75rem;" onclick="deleteItem('account', ${acc.id})">Hesabı Sil</button></div>
                </div>
            `).join('')}
        </div>

        <!-- Cash Flow Stats -->
        <h3 class="mb-1 mt-2" style="font-size: 1rem; color: var(--text-muted); text-transform: uppercase;">Aylık Nakit Akışı</h3>
        <div class="grid grid-3 mb-2">
             <div class="stat-card">
                <div class="stat-value text-success">${formatCurrency(totalIncome)}</div>
                <div class="stat-label">Bu Ay Giren Para</div>
            </div>
             <div class="stat-card">
                <div class="stat-value text-danger">${formatCurrency(totalExpense)}</div>
                <div class="stat-label">Bu Ay Çıkan Para</div>
            </div>
             <div class="stat-card">
                <div class="stat-value ${netProfit >= 0 ? 'text-success' : 'text-danger'}">${formatCurrency(netProfit)}</div>
                <div class="stat-label">Net Fark (Kâr/Zarar)</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                 <h3>Son Finansal Hareketler (Ekstre)</h3>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr><th>Tarih</th><th>İşlem Tipi</th><th>Kategori / Açıklama</th><th>Tutar</th><th>Hesap</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>24.12.2025</td>
                            <td><span class="badge badge-success">Tahsilat</span></td>
                            <td>Acıbadem (Sipariş Ödemesi)</td>
                            <td class="bold text-success">+₺125.000,00</td>
                            <td>Garanti BBVA</td>
                        </tr>
                        <tr>
                            <td>23.12.2025</td>
                            <td><span class="badge badge-danger">Gider</span></td>
                            <td>Kira (Ofis Kirası)</td>
                            <td class="bold text-danger">-₺12.000,00</td>
                            <td>Garanti BBVA</td>
                        </tr>
                        <tr>
                            <td>22.12.2025</td>
                            <td><span class="badge badge-danger">Gider</span></td>
                            <td>Personel (Avans - Ahmet Yılmaz)</td>
                            <td class="bold text-danger">-₺5.000,00</td>
                            <td>Merkez Kasa</td>
                        </tr>
                        <tr>
                            <td>20.12.2025</td>
                            <td><span class="badge badge-success">Satış Peşinatı</span></td>
                            <td>Peşin Satış (Klinik)</td>
                            <td class="bold text-success">+₺25.000,00</td>
                            <td>Merkez Kasa</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: MASRAFLAR (EXPENSES MANAGEMENT) ---
function renderExpenses() {
    return `
         <div class="flex-between mb-2">
            <div><h2>Masraf Yönetimi</h2><p class="text-muted">Personel, operasyon ve proje giderleri</p></div>
             <button class="btn btn-primary" onclick="openModal('expense')">Masraf Ekle / Onayla</button>
        </div>
        <div class="grid grid-3 mb-2">
            <div class="stat-card"><div class="stat-value">₺12,500</div><div class="stat-label">Bu Ay Yakıt</div></div>
            <div class="stat-card"><div class="stat-value">₺8,200</div><div class="stat-label">Bu Ay Yemek</div></div>
            <div class="stat-card"><div class="stat-value">₺45,000</div><div class="stat-label">Seyahat & Konaklama</div></div>
        </div>
        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>Tarih</th><th>Kategori</th><th>Açıklama</th><th>Tutar</th><th>İşlem</th></tr></thead>
                    <tbody>
                        \${AppData.expenses.map(e => \`
                            <tr>
                                <td>\${formatDate(e.date)}</td>
                                <td><span class="badge badge-info">\${e.category}</span></td>
                                <td>\${e.desc}</td>
                                <td class="bold text-warning">\${formatCurrency(e.amount)}</td>
                                <td><button class="btn btn-warning btn-sm" onclick="editItem('expense', \${e.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-danger btn-sm" onclick="deleteItem('expense', \${e.id})">Sil</button></td>
                            </tr>
                        \`).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: TRAVEL & TASK TRACKING ---
function renderTravel() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Araç ve Seyahat Takip Merkezi</h2>
                <p class="text-muted">Saha operasyonları, kurum ziyaretleri ve iş öncelik yönetimi</p>
            </div>
            <div class="flex gap-1">
                <button class="btn btn-warning" onclick="openModal('travel')">Yeni Görev / Seyahat Ekle</button>
            </div>
        </div>

        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                 <div class="stat-value text-danger">2</div>
                 <div class="stat-label">Acil / Kritik Görevler</div>
            </div>
            <div class="stat-card">
                 <div class="stat-value text-info">\${AppData.travels.length}</div>
                 <div class="stat-label">Toplam Aktif Plan</div>
            </div>
            <div class="stat-card">
                 <div class="stat-value text-success">3</div>
                 <div class="stat-label">Yolda / Sahada</div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3>Saha Operasyon ve Seyahat Planı</h3>
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr><th>Öncelik</th><th>Personel</th><th>Araç Plakası</th><th>Kurum / Şehir</th><th>Tarih & Süre</th><th>Görev / Amaç</th><th>Durum</th><th>İşlem</th></tr>
                    </thead>
                    <tbody>
                        \${AppData.travels.map(t => {
                            let priorityBadge = 'badge-secondary';
                            if(t.priority === 'Kritik') priorityBadge = 'badge-danger';
                            if(t.priority === 'Yüksek') priorityBadge = 'badge-warning';
                            if(t.priority === 'Normal') priorityBadge = 'badge-success';

                            let statusBadge = 'badge-secondary';
                            if(t.status === 'Yolda' || t.status === 'Bugün') statusBadge = 'badge-primary';
                            if(t.status === 'Tamamlandı') statusBadge = 'badge-success';
                            if(t.status === 'Planlanıyor') statusBadge = 'badge-warning';

                            return \`
                            <tr>
                                <td><span class="badge \${priorityBadge}">\${t.priority}</span></td>
                                <td class="bold flex align-center gap-1">\${t.assignee}</td>
                                <td><span style="background:var(--bg-lighter);padding:4px 8px;border-radius:4px;border:1px solid var(--border);font-family:monospace;">\${t.plate}</span></td>
                                <td>
                                    <div class="bold">\${t.hospital}</div>
                                    <div class="text-muted" style="font-size:0.75rem;">📍 \${t.city}</div>
                                </td>
                                <td>
                                    <div>\${new Date(t.date).toLocaleDateString('tr-TR')}</div>
                                    <div class="text-muted" style="font-size:0.75rem;">⏱️ \${t.duration} Gün</div>
                                </td>
                                <td>\${t.purpose}</td>
                                <td><span class="badge \${statusBadge}">\${t.status}</span></td>
                                <td>
                                    <button class="btn btn-secondary btn-sm" onclick="showToast('Rapor yükleme ekranı açılacak')">Rapor</button>
                                    <button class="btn btn-warning btn-sm" onclick="editItem('travel', \${t.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-danger btn-sm" onclick="deleteItem('travel', \${t.id})">Sil</button>
                                </td>
                            </tr>
                            \`;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: CUSTOMERS ---
function renderCustomers() {
    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Müşteri Listesi</h2>
                <p class="text-muted">Klinik, hastane ve kurumsal müşteri veritabanı</p>
            </div>
            <button class="btn btn-primary" onclick="openModal('customer')">${Icons.plus} Yeni Müşteri Ekle</button>
        </div>
        
        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                <div class="stat-value">${AppData.customers.length}</div>
                <div class="stat-label">Toplam Müşteri</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-success">${AppData.customers.filter(c => c.type === 'Hastane').length}</div>
                <div class="stat-label">Hastane/Kurumsal</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-info">${AppData.customers.filter(c => c.type === 'Klinik').length}</div>
                <div class="stat-label">Özel Klinik</div>
            </div>
        </div>

        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>ID</th><th>Kurum Adı</th><th>Şehir</th><th>Tip</th><th>İlgili Kişi</th><th>Telefon</th><th>İşlemler</th></tr></thead>
                    <tbody>
                        ${AppData.customers.map(c => `
                            <tr>
                                <td>#${c.id}</td>
                                <td><strong>${c.name}</strong></td>
                                <td>${c.city}</td>
                                <td><span class="badge badge-info">${c.type}</span></td>
                                <td>${c.contact}</td>
                                <td style="color:var(--text-muted);">${c.phone || '-'}</td>
                                <td>
                                    <button class="btn btn-secondary btn-sm" onclick="alert('Detaylar gösterilecek')">İncele</button>
                                    <button class="btn btn-warning btn-sm" onclick="editItem('customer', ${c.id})" style="margin-right: 5px;">Düzenle</button><button class="btn btn-danger btn-sm" onclick="deleteItem('customer', ${c.id})">Sil</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// --- MODULE: INVOICES ---
function renderInvoices() {
    const totalReceivables = AppData.receivables.filter(r => r.status === 'Bekliyor' || r.status === 'Gecikti').reduce((sum, r) => sum + r.amount, 0);

    return `
        <div class="flex-between mb-2">
            <div>
                <h2>Tahsilatlar ve Faturalar</h2>
                <p class="text-muted">Müşteri alacakları ve açık faturalar</p>
            </div>
            <button class="btn btn-primary">${Icons.plus} Yeni Fatura Kes</button>
        </div>
        
        <div class="grid grid-3 mb-2">
            <div class="stat-card">
                <div class="stat-value text-warning">${formatCurrency(totalReceivables)}</div>
                <div class="stat-label">Açık Alacaklar</div>
            </div>
            <div class="stat-card">
                <div class="stat-value text-danger">${AppData.receivables.filter(r => r.status === 'Gecikti').length}</div>
                <div class="stat-label">Geciken Tahsilat</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${AppData.receivables.length}</div>
                <div class="stat-label">Toplam Fatura</div>
            </div>
        </div>

        <div class="card">
            <div class="table-container">
                <table>
                    <thead><tr><th>Fatura No</th><th>Cari / Müşteri</th><th>Vade Tarihi</th><th>Kalan Gün</th><th>Tutar</th><th>Durum</th><th>İşlemler</th></tr></thead>
                    <tbody>
                         ${AppData.receivables.map(r => `
                            <tr>
                                <td><strong>${r.ref}</strong></td>
                                <td>${getCustomerName(r.customerId)}</td>
                                <td>${formatDate(r.dueDate)}</td>
                                <td>${getDaysRemaining(r.dueDate)}</td>
                                <td class="bold">${formatCurrency(r.amount)}</td>
                                <td><span class="badge badge-${r.status === 'Tahsil Edildi' ? 'success' : (r.status === 'Gecikti' ? 'danger' : 'warning')}">${r.status}</span></td>
                                <td>
                                    <button class="btn btn-secondary btn-sm">PDF</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
