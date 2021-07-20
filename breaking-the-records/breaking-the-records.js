function breakingRecords(scores) {
    // Write your code here
    console.log(scores)
    let score = [scores[0],scores[0]];
    let points = [0,0];
    scores.forEach((game,index)=>{
       if(game > score[0] && index > 0) {
           points[0]++;
           score[0] = game;
       }else 
       if(game < score[1] && index > 0) {
           points[1]++;
           score[1] = game;
       }
    });
    return points;
}