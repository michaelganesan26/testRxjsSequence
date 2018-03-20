//This is how you create the earth quake data

import { Observable } from "rxjs/Observable";
import L from "leaflet";
import { CLIENT_RENEG_WINDOW } from "tls";

const QUAKE_URL = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp";

//function using streams
function loadJSONP(settings){
   //const url = settings.url;
   //const callbackName = settings.callbackName;

   const script = document.createElement("script");
   script.type = "text/javascript";
   script.src = settings.url;


   window[settings.callbackName] = data =>{
      window[settings.callbackName].data = data;

   };

   return Observable.create(observer=>{
      
      const handler = e=>{
            const status = e.type === "error"?400:200;
            const response = window[settings.callbackName].data;
            
            if(status === 200){
              observer.next({
                status,
                responseType:"jsonp",
                response,
                originalEvent: e
              });

              observer.complete();
            }
            else{
              observer.error({
                 type:"error",
                 status,
                 originalEvent: e
              });
            }
      };

      script.onload = script.onreadystatechanged = script.onerror = handler;

      const head = window.document.getElementsByTagName("head")[0];
      head.insertBefore(script,head.firstChild);

   });

}






const mapContainer =document .createElement("div");
mapContainer.id="map";
document.body.appendChild(mapContainer);

const map = L.map("map").setView([33.858631, -118.279602], 7);  //Latitude for Los Angeles
L.tileLayer(​"http://{s}.tile.osm.org/{z}/{x}/{y}.png"​).addTo(map); //apply a style to the div(map)

const quake$ = Observable.interval(5000)
.flatMap(()=>{
   return loadJSONP({
       url:QUAKE_URL,
       callbackName: "eqfeed_callback"
   }).retry(3);
})
.flatMap(result=>Observable.from(result.response.features))
.distinct(quake => quake.properties.code);



quake$.subscribe(quake=>{
   const coords = quake.geometry.coordinates;
   const size = quake.properties.mag * 10000;

   L.circle([coords[1],coords[0]],size).addTo(map);

  });
