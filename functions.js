var comp = {}, state = {},
menus = {
  registration: {
    full: 'Pendaftaran', icon: 'address-book',
    desc: 'Adalah menu yang dapat digunakan oleh user bidang pendaftaran untuk mencari data pasien lama, menginput data pasien baru, meregistrasikan seorang pasien ke poliklinik atau ke instalasi IGD. Tersedia modal cetak laporan untuk admin.',
    video: 'https://www.youtube.com/watch?v=EDqkltXaILY&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=1&t=3s',
    children: {
      icd: {full: 'Kodifikasi', icon: 'code'},
      queue: {full: 'Antrian', icon: 'stream'}
    }
  },
  emergency: {
    full: 'IGD', icon: 'heartbeat',
    desc: 'Adalah menu yang dapat digunakan oleh perawat dan dokter untuk menangani pasien yang telah didaftarkan sebelumnya oleh petugas pendaftaran. Tersedia form SOAP bagi perawat dan dokter untuk mencatat asuhan dan rekam medisnya.',
    video: 'https://www.youtube.com/watch?v=a7X9jwGdlHI&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=3&t=2s'
  },
  outpatient: {
    full: 'Rawat Jalan', icon: 'walking',
    desc: 'Adalah menu yang dapat digunakan oleh perawat dan dokter untuk menangani pasien yang terdaftar pada poliklinik dimana petugas medis tersebut ditempatkan. Tersedia antrian dan halaman rekam medis untuk mencatatkan informasi SOAP pasien.',
    video: 'https://www.youtube.com/watch?v=bLTxJLxBL1g&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=2&t=1s'
  },
  inpatient: {
    full: 'Rawat Inap', icon: 'bed',
    desc: 'Adalah menu yang dapat digunakan oleh perawat dan dokter untuk mengadmisi seorang pasien ke rawat inap dan menentukan bed bagi pasien. Tersedia form SOAP per kali observasi bagi pasien yang diinapkan. Sudah terintegrasi dengan menu daftar ketersediaan bed, jadwal operasi, gizi, dan BPJS.',
    video: 'https://www.youtube.com/watch?v=ZMCLcKx6q6A&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=4&t=1s',
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
    video: 'https://www.youtube.com/watch?v=ufjDfjjr9IA&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=5&t=122s',
    children: {
      transfer: {full: 'Amprah', icon: 'exchange-alt'}
    }
  },
  pharmacy: {
    full: 'Apotik', icon: 'pills',
    desc: 'Adalah menu khusus bagi apoteker untuk menyerahkan obat yang diresepkan oleh dokter dari instalasi rawat jalan, IGD, dan rawat inap. Juga disediakan menu untuk penjualan obat bebas bagi non-pasien.',
    video: 'https://www.youtube.com/watch?v=ufjDfjjr9IA&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=5&t=122s'
  },
  laboratory: {
    full: 'Laboratorium', icon: 'flask',
    desc: 'Adalah menu khusus bagi laborat yang akan menerima permintaan uji klinis oleh dokter dan mengisikan respon hasil diagnosanya. Secara otomatis hasil tersebut akan muncul pada cetak laporan SOAP dokter.',
    video: 'https://www.youtube.com/watch?v=XKkdONSGOtE&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=6&t=1s'
  },
  radiology: {
    full: 'Radiologi', icon: 'radiation',
    desc: 'Adalah menu khusus bagi radiologist yang akan menerima permintaan uji klinis oleh dokter dan mengisikan respon hasil diagnosanya. Secara otomatis hasil tersebut akan muncul pada cetak laporan SOAP dokter.',
    video: 'https://www.youtube.com/watch?v=fqIq6S-ba3U&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=7&t=1s'
  },
  management: {
    full: 'Manajemen', icon: 'users',
    desc: 'Adalah menu khusus bagi administrator sistem untuk mengelola hak akses bagi seluruh karyawan yang diizinkan untuk masuk ke dalam sistem',
    video: 'https://www.youtube.com/watch?v=6Az3AhKTzSw&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=8',
    children: {
      users: {full: 'Pengguna', icon: 'users'},
      references: {full: 'Referensi', icon: 'file-contract'}
    }
  },
  gizi: {
    full: 'Gizi', icon: 'utensils',
    desc: 'Adalah menu khusus bagi petugas instalasi gizi untuk mengetahui rincian kebutuhan nutrisi bagi setiap pasien yang menginap di rumah sakit.',
    video: 'https://www.youtube.com/watch?v=-CagW5hkIIw&list=PL4oE8OvUySlyxLt2G6zROOCvrjeeXxNMR&index=9&t=3s'
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
