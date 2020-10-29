Ext.define('AP.view.Main', {
    extend: 'Ext.panel.Panel',
    layout: 'border',
    controller:{
      xclass:"AP.view.MainController"
    },
    viewModel: {
        xclass: 'AP.view.MainViewModel'
    },
    items: [{
        xtype: 'panel',
        reference: 'header',
        border:false,
        height: 130,
        bodyPadding: 10,
        region: 'north',
        title:"Layouts Types",
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
    }, {
        xtype: 'panel',
        border:false,
        width: 200,
        title: 'Types',
        split: true,
        collapsible: false,
        region: 'west',
        layout: {
            type: 'vbox',
            align: 'stretch',
        },
        items: [{
            xtype: 'treelist',
            flex: 1,
            bind: '{navItems}',
            listeners: {
                selectionchange: 'Selection'
            }
        }]
    }, {
        xtype: 'tabpanel',
        border:false,
        reference: 'mainTabPanel',
        region: 'center',
        items: []
    }]
});
