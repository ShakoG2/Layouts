Ext.define("AP.view.Layoutborder",{
    extend:"Ext.panel.Panel",
    layout:"border",
    items:[{
        xtype:"panel",
        region:"north",
        title:"panel",
        flex:1
    },{
        xtype:"panel",
        region:"center",
        title:"panel",
        flex:3,
    },{
        xtype:"panel",
        region:"east",
        title:"panel",
        flex:1,
    }]
})