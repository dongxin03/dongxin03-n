
import "../../../node_modules/jquery/dist/jquery";
import axios from "axios";

let data;

axios.get("http://api01.bitspaceman.com:8000/news/eastday?kw=1&apikey=WmZXTd5z0Ko4Ees19SH9ZWKH4tu2sthq4eZykPcGe8TmqvNDa4NKfQIzbiwEPCx7").then(data=>{
    data=data
})


// $.ajax({
//     url:"http://api01.bitspaceman.com:8000/news/eastday?kw=1&apikey=WmZXTd5z0Ko4Ees19SH9ZWKH4tu2sthq4eZykPcGe8TmqvNDa4NKfQIzbiwEPCx7",
//     dataType:"jsonp",
//     success:data=>{
//        return data=data
//     }
// })

export default data;