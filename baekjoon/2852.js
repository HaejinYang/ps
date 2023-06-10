function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [n, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');

    let store = [];
    input.forEach(row => {
        let [team, time] = row.split(" ");
        team = Number(team);
        let [m, s] = time.split(":");
        time = parseInt(m)*60 + parseInt(s);

        store.push([team, time]);
    });

    store.sort((a, b) => {
        return a[1] - b[1];
    })

    store.push([0, 60*48]);

    let teamTheOne = [0, 0];
    let teamTheTwo = [0, 0];
    let prevTime = 0;
    store.forEach(e => {
        if(teamTheOne[0] > teamTheTwo[0]) {
            teamTheOne[1] += (e[1] - prevTime);
        } else if(teamTheOne[0] < teamTheTwo[0]){
            teamTheTwo[1] += (e[1] - prevTime);
        } else {
            // x
        }

        if(e[0] == 1) {
            teamTheOne[0]++;
        } else if(e[0] == 2) {
            teamTheTwo[0]++;
        } else {
            // x
        }

        prevTime = e[1];
    });

    let result = [secondsToMMSS(teamTheOne[1]), secondsToMMSS(teamTheTwo[1])];
    console.log(result.join("\n"));
}

function secondsToMMSS(seconds) {
    let mm = Math.floor(seconds / 60).toString();
    mm = mm.length == 1? "0"+mm : mm;
    let ss = (seconds % 60).toString();
    ss = ss.length == 1? "0"+ss : ss;

    return mm + ":" + ss;
}

solve();