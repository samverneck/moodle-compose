YUI.add("moodle-report_eventlist-eventfilter",function(e,t){function n(){n.superclass.constructor.apply(this,arguments)}var r={EVENTNAME:"#id_eventname",EVENTCOMPONENT:"#id_eventcomponent",EVENTEDULEVEL:"#id_eventedulevel",EVENTCRUD:"#id_eventcrud",FILTERBUTTON:"#id_filterbutton",CLEARBUTTON:"#id_clearbutton"};e.extend(n,e.Base,{_table:null,_eventName:null,_component:null,_eduLevel:null,_crud:null,initializer:function(){var t=e.one(r.FILTERBUTTON),n=e.one(r.CLEARBUTTON);this._createTable(this.get("tabledata")),this._eventName=e.one(r.EVENTNAME),this._component=e.one(r.EVENTCOMPONENT),this._eduLevel=e.one(r.EVENTEDULEVEL),this._crud=e.one(r.EVENTCRUD),this._eventName.on("valuechange",this._totalFilter,this),t.on("click",this._totalFilter,this),n.on("click",this._clearFilter,this)},_createTable:function(t){var n=new e.DataTable({columns:[{key:"fulleventname",label:M.util.get_string("eventname","report_eventlist"),allowHTML:!0,sortable:!0,sortFn:function(e,t,n){var r=e.getAttrs().raweventname,i=t.getAttrs().raweventname,s=r>i?1:-1;return n?-s:s},title:M.util.get_string("eventname","report_eventlist")},{key:"component",label:M.util.get_string("component","report_eventlist"),allowHTML:!0,sortable:!0,title:M.util.get_string("component","report_eventlist")},{key:"edulevel",label:M.util.get_string("edulevel","report_eventlist"),sortable:!0,title:M.util.get_string("edulevel","report_eventlist")},{key:"crud",label:M.util.get_string("crud","report_eventlist"),sortable:!0,title:M.util.get_string("crud","report_eventlist")},{key:"objecttable",label:M.util.get_string("affectedtable","report_eventlist"),sortable:!0,title:M.util.get_string("affectedtable","report_eventlist")},{key:"since",label:M.util.get_string("since","report_eventlist"),sortable:!0,title:M.util.get_string("since","report_eventlist")},{key:"legacyevent",label:M.util.get_string("legacyevent","report_eventlist"),sortable:!0,title:M.util.get_string("legacyevent","report_eventlist")}],data:t,strings:{sortBy:"{title}",reverseSortBy:"{title}"}});return n.render("#report-eventlist-table"),n.get("boundingBox").addClass("report-eventlist-datatable-table"),this._table=n,this},_totalFilter:function(){var t=this._eventName.get("value").toLowerCase(),n=this._component.get("options").item(this._component.get("selectedIndex")).get("text").toLowerCase(),r=this._component.get("value"),i=this._eduLevel.get("options").item(this._eduLevel.get("selectedIndex")).get("text").toLowerCase(),s=this._eduLevel.get("value"),o=this._crud.get("options").item(this._crud.get("selectedIndex")).get("text").toLowerCase(),u=this._crud.get("value"),a,f=[];for(a=0;a<this.get("tabledata").length;a++){var l=e.Node.create(this.get("tabledata")[a].fulleventname).get("text"),c=l.toLowerCase().indexOf(t)>=0,h=this.get("tabledata")[a].component.toLowerCase().indexOf(n)>=0,p=this.get("tabledata")[a].edulevel.toLowerCase().indexOf(i)>=0,d=this.get("tabledata")[a].crud.toLowerCase().indexOf(o)>=0;t===""&&(c=!0),r==="0"&&(h=!0),s==="0"&&(p=!0),u==="0"&&(d=!0),c&&h&&p&&d&&f.push(this.get("tabledata")[a])}this._table.set("data",f)},_clearFilter:function(){this._eventName.set("value",""),this._component.set("value","0"),this._eduLevel.set("value","0"),this._crud.set("value","0"),this._table.set("data",this.get("tabledata"))}},{NAME:"eventFilter",ATTRS:{tabledata:{value:null}}}),e.namespace("M.report_eventlist.EventFilter").init=function(e){return new n(e)}},"@VERSION@",{requires:["base","event","node","node-event-delegate","datatable","autocomplete","autocomplete-filters"]});
