Ext.define("AP.view.Layouthbox",{
    extend:"Ext.panel.Panel",
    border:false,
    layout:"fit",
    items:[{
        xtype:"panel",
        layout:{
          type:"hbox",
          align:"stretch",
        },
        border:false,
        title:"hbox",
        items:[{
            xtype:"panel",
            title:"panel1",
            flex:2,

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