# HW-3
What code draws the blades of grass?
line 10: stroke(random(60, 70), 100, 90);

What code makes the "lawnmower" come by? How often does it come by?
line 21-25
if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
 The lawnmower comes at unpredictable times.

What's the point of the h variable?
The h variable determines the boundary height of the grass before the first time the lawnmower comes.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
The -10 determines the length of the individual blades of grass. It is there to control how tall the grass grows.
