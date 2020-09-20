_.assign(comp, {
  navbar: () => m('nav.navbar.is-primary.is-fixed-top',
    m('.navbar-brand',
      m('a.navbar-item', {
        'data-tooltip': 'ke Github',
        class: 'has-tooltip-bottom',
        href: 'https://github.com/rikyperdana/simrs',
        ondblclick: () => gtag_report_conversion(
          'https://github.com/rikyperdana/simrs'
        ), target: '_blank'
      }, "SIMRS.dev"),
      m('.navbar-burger',
        {
          role: 'button', class: state.burgerMenu ? 'is-active' : '',
          onclick: () => state.burgerMenu = !state.burgerMenu
        },
        _.range(3).map(i => m('span', {'aria-hidden': true}))
      )
    ),
    m('.navbar-menu',
      {class: state.burgerMenu && 'is-active'},
      m('.navbar-start', _.map(topMenus, (val, key) =>
        m('a.navbar-item',
          {
            class: val.children && 'has-dropdown is-hoverable',
            onclick: () => [
              _.assign(state, {
                moduleInfo: key,
                burgerMenu: null
              }),
              m.redraw()
            ]
          },
          val.children ? [
            m('a.navbar-link', _.startCase(val.full)),
            m('.navbar-dropdown', _.map(val.children, (i, j) =>
              m('a.navbar-item', makeIconLabel(i.icon, i.full))
            ))
          ] : m('span', _.startCase(val.full))
        )
      )),
      m('.navbar-end', m('.navbar-item.has-dropdown.is-hoverable',
        m('a.navbar-link', 'yourUsername'),
        m('.navbar-dropdown.is-right',
          m('a.navbar-item',
            makeIconLabel('user-tag', 'Peranan: Dokter')
          ),
          m('a.navbar-item',
            makeIconLabel('shapes', 'Bidang: Rawat Jalan')
          ),
          m('a.navbar-item',
            makeIconLabel('clinic-medical', 'Poliklinik: Penyakit Dalam')
          ),
          m('hr.dropdown-divider'),
          m('a.navbar-item',
            makeIconLabel('sign-out-alt', 'Logout')
          )
        )
      ))
    )
  ),

  dashboard: () => m('.content',
    state.moduleInfo && m('article.message',
      {onclick: () => [state.moduleInfo = null, m.redraw()]},
      m('.message-header', menus[state.moduleInfo].full),
      m('.message-body', menus[state.moduleInfo].desc)
    ),
    m('h1', 'Dashboard'),
    m('.buttons',
      m('.button.is-info', {
        "data-tooltip": 'otomatis setiap beberapa menit / manual',
      }, 'Sync'),
      m('span', 'Terakhir sinkronisasi 3 detik yang lalu'),
    ),
    _.chunk(_.map(menus, (v, k) => [v, k]), 3).map(i =>
      m('.columns', i.map(j => m('.column',
        m('.box', m('a.article.media',
          j[0].video && {
            'data-tooltip': 'ke video Tutorial '+j[0].full,
            class: 'has-tooltip-info',
            href: j[0].video, target: '_blank'
          },
          m('.media-left', m('span.icon.has-text-primary',
            m('i.fas.fa-2x.fa-'+j[0].icon))
          ),
          m('.media-content', m('.content',m('h3', j[0].full)))
        ))
      )))
    ),
    m('h1', 'Statistik Sistem'),
    m('.tabs.is-boxed', m('ul',
      {style: 'margin-left: 0%'},
      _.map({
        pasien: ['Pasien', 'walking'],
        rawatJalan: ['Rawat Jalan', 'ambulance'],
        emergency: ['Emergency', 'heart'],
        rawatInap: ['Rawat Inap', 'bed'],
        radiology: ['Radiologi', 'radiation'],
        laboratory: ['Laboratorium', 'flask'],
        management: ['Management', 'users']
      }, (val, key) => m('li',
        {class: key === false && 'is-active'},
        m('a', makeIconLabel(val[1], val[0]))
      ))
    )),
    m('.columns', ({pasien: [
      'Total jumlah pasien: 86453',
      'Total pasien pria: 58325',
      'Total pasien wanita: 28128'
    ]})['pasien']
    .map(i => m('.column', m('.notification',
      {class: 'is-primary'}, i
    ))))
  )
})

m.mount(document.body, {view: () => m('.has-background-light',
  comp.navbar(), m('section.section', m('.container',
    {style: 'min-height:100vh'}, m('br'),
    comp.dashboard()
  ))
)})
