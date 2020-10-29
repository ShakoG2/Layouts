Ext.define("AP.view.Layoutvbox",{
    extend:"Ext.panel.Panel",
    border:false,
    layout:"fit",
    items:[{
        xtype:"panel",
        layout:{
            type:"vbox",
            align:"stretch",
        },
        border:false,
        title:"vbox",
        items:[{
            xtype:"panel",
            title:"panel1",
            flex:1,

        },{
            xtype:"panel",
            title:"panel1",
            flex:1,

        },{
            xtype:"panel",
            title:"panel1",
            flex:1,

        }]
    }]
})