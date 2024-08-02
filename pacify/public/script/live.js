let loopComponent = document.getElementById('liveComponentDiv');
// loop to display the live schedules //example
for (var i = 0; i < 3; i++) {
    loopComponent.innerHTML += `
        <div class="component02">
            <div class="upperComponent">
                <div class="imageDiv">
                    <img src="../public/media/sample-speaker.jpg" alt="#">
                </div>
                <div class="textAndStatusDiv">
                    <div class="notLiveDiv">
                        <p>Starts on 8:00 pm</p>
                    </div>
                    <div class="textDiv">
                        <p><b>Topic: ABCD Meet</b></p>
                        <p><b>Time: </b>8:00 pm</p>
                        <p class="description"><b>Description: </b>This is discription box. The host can notice anything here in the form of text.</p>
                    </div>
                </div>
            </div>
            <div class="lowerComponent">
                <p>Speaker: Mr. Handsome Meitei</p>
                <p>ABC Rank</p>
            </div>
        </div>
    `;
}