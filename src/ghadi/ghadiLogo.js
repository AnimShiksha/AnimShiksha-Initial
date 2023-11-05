class GhadiLogo{
    constructor() {}

    ghadiLogo(nose,noseSize) {
        // fill(14, 14, 48); // Red color for a funny nose
        stroke(0);
        ellipse(nose.x, nose.y, noseSize/2, noseSize/2); // Adjust the size as needed
        let hours = 12-frameCount/200;
        let minutes = 15+frameCount/20;
        // Calculate the angle for the hour hand
        const hourAngle = TWO_PI * (hours % 12) / 12 - HALF_PI; // Offset by -90 degrees
        const hourLength = noseSize * 1.5; // Adjust the length of the hour hand

        // Calculate the angle for the minute hand
        const minuteAngle = TWO_PI * minutes / 60 - HALF_PI; // Offset by -90 degrees
        const minuteLength = noseSize * 2; // Adjust the length of the minute hand
        
        

        fill(21, 4, 43,10); // Red color for a funny nose
        ellipse(nose.x, nose.y, noseSize*5); // Adjust the size as needed


        stroke(0);
        strokeWeight(10);
        fill(2)
        // Draw the hour hand
        line(nose.x, nose.y, nose.x + cos(hourAngle) * hourLength, nose.y + sin(hourAngle) * hourLength);

        // Draw the minute hand
        line(nose.x, nose.y, nose.x + cos(minuteAngle) * minuteLength, nose.y + sin(minuteAngle) * minuteLength);


        stroke(17, 4, 41);
        strokeWeight(9);
        fill(255); // White color for numbers
        textSize(24); // Adjust the text size as needed

        // Display numbers for hours 1 to 12 around the clock
        for (let i = 1; i <= 12; i++) {
            // Calculate the position for each number
            const angle = TWO_PI / 12 * (i - 3); // Offset by -3 to start at 1 o'clock
            const x = nose.x + cos(angle) * (noseSize * 2.5); // Adjust the radius as needed
            const y = nose.y + sin(angle) * (noseSize * 2.5); // Adjust the radius as needed

            // Display the number at the calculated position
            text(i, x, y);
        }

      }
}
