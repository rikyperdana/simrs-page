var comp = {}, state = {},
menus = {
  registration: {
    full: 'Pendaftaran', icon: 'address-book',
    desc: 'Adalah menu yang dapat digunakan oleh user bidang pendaftaran untuk mencari data pasien lama, menginput data pasien baru, meregistrasikan seorang pasien ke poliklinik atau ke instalasi IGD. Tersedia modal cetak laporan untuk admin.',
    video: 'https://www.youtube.com/watch?v=irSxnKSRIOI&list=PL4oE8OvUySlyfGzQTu8kN9sPWWfcn_wSZ',
    children: {
      icd: {full: 'Kodifikasi', icon: 'code'},
      queue: {full: 'Antrian', icon: 'stream'}
    }
  },
  emergency: {
    full: 'IGD', icon: 'heartbeat',
    desc: 'Adalah menu yang dapat digunakan oleh perawat dan dokter untuk menangani pasien yang telah didaftarkan sebelumnya oleh petugas pendaftaran. Tersedia form SOAP bagi perawat dan dokter untuk mencatat asuhan dan rekam medisnya.',
    video: 'https://www.youtube.com/watch?v=sgXKz5Y9kks&list=PL4oE8OvUySlyfGzQTu8kN9sPWWfcn_wSZ&index=4'
  },
  outpatient: {
    full: 'Rawat Jalan', icon: 'walking',
    desc: 'Adalah menu yang dapat digunakan oleh perawat dan dokter untuk menangani pasien yang terdaftar pada poliklinik dimana petugas medis tersebut ditempatkan. Tersedia antrian dan halaman rekam medis untuk mencatatkan informasi SOAP pasien.',
    video: 'https://www.youtube.com/watch?v=O63JFK5j_Mk&list=PL4oE8OvUySlyfGzQTu8kN9sPWWfcn_wSZ&index=3'
  },
  inpatient: {
    full: 'Rawat Inap', icon: 'bed',
    desc: 'Adalah menu yang dapat digunakan oleh perawat dan dokter untuk mengadmisi seorang pasien ke rawat inap dan menentukan bed bagi pasien. Tersedia form SOAP per kali observasi bagi pasien yang diinapkan. Sudah terintegrasi dengan menu daftar ketersediaan bed, jadwal operasi, gizi, dan BPJS.',
    video: 'https://www.youtube.com/watch?v=30ePQptZ7CA&list=PL4oE8OvUySlyfGzQTu8kN9sPWWfcn_wSZ&index=5',
    children: {
      beds: {full: 'Daftar Kamar', icon: 'bed'},
      surgery: {full: 'Antrian Bedah', icon: 'procedures'},
      gizi: {full: 'Gizi', icon: 'utensils'}
    },
  },
  cashier: {
    full: 'Kasir', icon: 'cash-register',
    desc: 'Adalah menu khusus bagi petugas kasir untuk menerima dana dari pasien yang memilih cara pembayaran umum atas layanan rawat jalan, IGD, dan rawat inap. Tersedia modal cetak laporan untuk masing-masing cara bayar.',
  },
  storage: {
    full: 'Storage', icon: 'cubes',
    desc: 'Adalah menu yang dapat diakses oleh petugas gudang, apoteker, perawat dan dokter untuk mengelola atau sekedar melihat ketersediaan stok obat tertentu yang tercatat oleh sistem. Terdapat menu amprah yang dapat digunakan antara instalasi farmasi dan seluruh instalasi lainnya untuk pemutasian barang, berikut dengan cetak laporan mutasinya.',
    video: 'https://www.youtube.com/watch?v=StlCB8HqFU4&list=PL4oE8OvUySlyfGzQTu8kN9sPWWfcn_wSZ&index=2',
    children: {
      transfer: {full: 'Amprah', icon: 'exchange-alt'}
    }
  },
  pharmacy: {
    full: 'Apotik', icon: 'pills',
    desc: 'Adalah menu khusus bagi apoteker untuk menyerahkan obat yang diresepkan oleh dokter dari instalasi rawat jalan, IGD, dan rawat inap. Juga disediakan menu untuk penjualan obat bebas bagi non-pasien.',
    video: 'https://www.youtube.com/watch?v=StlCB8HqFU4&list=PL4oE8OvUySlyfGzQTu8kN9sPWWfcn_wSZ&index=2' // sama dengan farmasi
  },
  laboratory: {
    full: 'Laboratorium', icon: 'flask',
    desc: 'Adalah menu khusus bagi laborat yang akan menerima permintaan uji klinis oleh dokter dan mengisikan respon hasil diagnosanya. Secara otomatis hasil tersebut akan muncul pada cetak laporan SOAP dokter.',
  },
  radiology: {
    full: 'Radiologi', icon: 'radiation',
    desc: 'Adalah menu khusus bagi radiologist yang akan menerima permintaan uji klinis oleh dokter dan mengisikan respon hasil diagnosanya. Secara otomatis hasil tersebut akan muncul pada cetak laporan SOAP dokter.',
  },
  management: {
    full: 'Manajemen', icon: 'users',
    desc: 'Adalah menu khusus bagi administrator sistem untuk mengelola hak akses bagi seluruh karyawan yang diizinkan untuk masuk ke dalam sistem',
    video: 'https://www.youtube.com/watch?v=bzPYmBn-HeY&list=PL4oE8OvUySlyfGzQTu8kN9sPWWfcn_wSZ&index=7',
    children: {
      users: {full: 'Pengguna', icon: 'users'},
      references: {full: 'Referensi', icon: 'file-contract'}
    }
  },
  gizi: {
    full: 'Gizi', icon: 'utensils',
    desc: 'Adalah menu khusus bagi petugas instalasi gizi untuk mengetahui rincian kebutuhan nutrisi bagi setiap pasien yang menginap di rumah sakit.'
  },
  cssd: {
    full: 'Laundry', icon: 'tshirt',
    desc: 'Menu ini masih dalam tahap perencanaan oleh developer..'
  }
},

topMenus = _.omit(menus, ['cssd', 'gizi']),

makeIconLabel = (icon, label) => [
  m('span.icon', m('i.fas.fa-'+icon)),
  m('span', label)
]
