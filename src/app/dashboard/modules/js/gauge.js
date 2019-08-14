import { liquidFillGaugeDefaultSettings, loadLiquidFillGauge } from './liquidFillGauge';
import '../css/style_gauge.css'

var config = liquidFillGaugeDefaultSettings();
config.circleThickness = 0.1;
config.textVertPosition = 0.2;
config.waveAnimateTime = 1000;
config.textVertPosition = 0.5;

var gauge = loadLiquidFillGauge("fillgauge", "-1", config);

function NewValue() {
    if (Math.random() > 0.5) {
        return Math.round(Math.random() * 100);
    } else {
        return (Math.random() * 100).toFixed(1);
    }
}
const requestApiData = () => {
    const requestURL =
        "http://192.168.0.105/api/water_level";

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();
    request.responseType = "json";

    // Open a new connection, using the GET request on the URL endpoint
    request.open("GET", requestURL, true);
    console.log(request);

    request.onload = function () {
        // Begin accessing JSON data here
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(this.response['water_level']);
            console.log(data);
            const isLow_level = data < 25;
            const isHigh_level = data > 75;
            if (isLow_level) {
                _changeColor({
                    liquidColor: "#d64d4d",
                    strokeColor: "#d64d4d",
                    textColor: "#d64d4d",
                    textOverlayColor: "#de7171"
                });
            } else if (isHigh_level) {
                _changeColor({
                    liquidColor: "#7ed650",
                    strokeColor: "#7ed650",
                    textColor: "#7ed650",
                    textOverlayColor: "#bef6b0"
                });
            } else {
                // Default >=25 and <=75
                _changeColor({
                    liquidColor: "#178BCA",
                    strokeColor: "#178BCA",
                    textColor: "#178BCA",
                    textOverlayColor: "#47bBfA"
                });
            }
            gauge.update(data);
        }
    };
    const _changeColor = function ({
        liquidColor = "#178BCA",
        strokeColor = "#178BCA",
        textColor = "#178BCA",
        textOverlayColor = "#47BBFA"
    }) {
        d3.select("#fillgauge > g > g > circle").style("fill", liquidColor);
        d3.select("#fillgauge > g > path").style("fill", strokeColor);
        d3.select("#fillgauge > g > text").style("fill", textColor);
        d3.select("#fillgauge > g > g > text").style(
            "fill",
            textOverlayColor
        );
    };

    request.onerror = function () {
        console.log("Erro na requisição!");
        gauge.update("-1");
    };

    // Send request
    request.send();
};

setInterval(requestApiData, 1000);