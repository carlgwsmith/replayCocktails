import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{'backgroundColor': '#33333350', 'padding': '14px', 'borderRadius': '4px'}}>{text}</div>;

export default function locationMap(){
    const defaultProps = {
        center: {
          lat: 38.9717,
          lng: -95.277390
        },
        zoom: 13
      };
      
      function mapClick (){
        document.querySelector('.map-overlay').style.pointerEvents='none'
      }

    
return(
    <>
     <div className="overflow-hidden">
     <div className="map-overlay" onClick={mapClick}></div>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1su47VXkCdBAoFAoEar-85NqyI9SfMo0&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
    </div>
    </>
)
}