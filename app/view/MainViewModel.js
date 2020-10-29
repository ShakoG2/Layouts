Ext.define('AP.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    stores: {
        navItems: {
            type: 'tree',
            root: {
                expanded: true,
                children: [{
                    text: 'Layout Fit',
                    iconCls: 'fa fa-home',
                    className:"AP.view.Layoutfit",
                    leaf: true
                }, {
                    text: 'Layout Hbox',
                    iconCls: 'fa fa-home',
                    className:"AP.view.Layouthbox",
                    leaf: true
                }, {
                    text: 'Layout Vbox',
                    iconCls: 'fa fa-home',
                    className:"AP.view.Layoutvbox",
                    leaf: true
                },{
                    text: 'Layout Border',
                    iconCls: 'fa fa-home',
                    className:"AP.view.Layoutborder",
                    leaf: true
                }]
            }
        }
    }
})



































