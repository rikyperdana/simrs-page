var comp = {},
menus = {
  registration: {
    full: 'Pendaftaran', icon: 'address-book',
    children: {
      icd: {full: 'Kodifikasi', icon: 'code'},
      queue: {full: 'Antrian', icon: 'stream'}
    }
  },
  emergency: {full: 'IGD', icon: 'heartbeat'},
  outpatient: {full: 'Rawat Jalan', icon: 'walking'},
  inpatient: {
    full: 'Rawat Inap', icon: 'bed',
    children: {
      beds: {full: 'Daftar Kamar', icon: 'bed'},
      surgery: {full: 'Antrian Bedah', icon: 'procedures'},
      gizi: {full: 'Gizi', icon: 'utensils'}
    }
  },
  cashier: {full: 'Kasir', icon: 'cash-register'},
  storage: {
    full: 'Storage', icon: 'cubes',
    children: {
      transfer: {full: 'Amprah', icon: 'exchange-alt'}
    }
  },
  pharmacy: {full: 'Apotik', icon: 'pills'},
  laboratory: {full: 'Laboratorium', icon: 'flask'},
  radiology: {full: 'Radiologi', icon: 'radiation'},
  management: {
    full: 'Manajemen', icon: 'users',
    children: {
      users: {full: 'Pengguna', icon: 'users'},
      references: {full: 'Referensi', icon: 'file-contract'}
    }
  },
  gizi: {full: 'Gizi', icon: 'utensils'},
  cssd: {full: 'Laundry', icon: 'tshirt'}
},

topMenus = _.omit(menus, ['cssd', 'gizi']),

makeIconLabel = (icon, label) => [
  m('span.icon', m('i.fas.fa-'+icon)),
  m('span', label)
]
