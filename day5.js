// --- Day 5: Hydrothermal Venture ---
// You come across a field of hydrothermal vents on the ocean floor! These vents constantly produce large, opaque clouds, so it would be best to avoid them if possible.

// They tend to form in lines; the submarine helpfully produces a list of nearby lines of vents (your puzzle input) for you to review. For example:

// 0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2
// Each line of vents is given as a line segment in the format x1,y1 -> x2,y2 where x1,y1 are the coordinates of one end the line segment and x2,y2 are the coordinates of the other end. These line segments include the points at both ends. In other words:

// An entry like 1,1 -> 1,3 covers points 1,1, 1,2, and 1,3.
// An entry like 9,7 -> 7,7 covers points 9,7, 8,7, and 7,7.
// For now, only consider horizontal and vertical lines: lines where either x1 = x2 or y1 = y2.

// So, the horizontal and vertical lines from the above list would produce the following diagram:

// .......1..
// ..1....1..
// ..1....1..
// .......1..
// .112111211
// ..........
// ..........
// ..........
// ..........
// 222111....
// In this diagram, the top left corner is 0,0 and the bottom right corner is 9,9. Each position is shown as the number of lines which cover that point or . if no line covers that point. The top-left pair of 1s, for example, comes from 2,2 -> 2,1; the very bottom row is formed by the overlapping lines 0,9 -> 5,9 and 0,9 -> 2,9.

// To avoid the most dangerous areas, you need to determine the number of points where at least two lines overlap. In the above example, this is anywhere in the diagram with a 2 or larger - a total of 5 points.

// Consider only horizontal and vertical lines. At how many points do at least two lines overlap?

let lines = `905,103 -> 905,82
253,13 -> 253,546
578,60 -> 900,60
102,71 -> 535,71
678,419 -> 678,363
366,938 -> 366,136
15,299 -> 149,165
445,99 -> 464,80
519,262 -> 814,262
687,609 -> 687,219
528,128 -> 398,128
704,363 -> 49,363
335,157 -> 335,715
536,120 -> 215,441
494,587 -> 494,764
15,672 -> 15,835
748,346 -> 748,471
231,395 -> 89,395
922,989 -> 18,85
787,828 -> 453,828
117,186 -> 729,798
647,201 -> 439,201
368,399 -> 261,399
337,294 -> 301,294
20,660 -> 396,660
658,383 -> 658,445
284,225 -> 284,202
89,582 -> 89,468
517,582 -> 400,582
168,167 -> 168,473
697,682 -> 408,393
528,198 -> 528,245
189,171 -> 785,767
679,598 -> 965,598
149,560 -> 187,560
778,734 -> 406,734
626,959 -> 626,330
392,479 -> 392,461
70,705 -> 70,498
462,132 -> 380,50
776,690 -> 776,413
710,894 -> 153,894
484,532 -> 706,754
72,148 -> 72,120
441,81 -> 576,81
367,959 -> 367,199
217,706 -> 217,471
715,418 -> 963,170
26,126 -> 26,659
750,126 -> 589,126
404,257 -> 404,136
809,148 -> 848,148
647,205 -> 572,205
977,67 -> 223,821
846,299 -> 846,444
575,946 -> 575,742
216,853 -> 969,853
120,600 -> 120,351
105,565 -> 100,565
184,781 -> 747,781
133,727 -> 662,198
273,388 -> 273,828
472,324 -> 539,324
497,889 -> 497,249
56,145 -> 655,145
883,99 -> 986,99
391,607 -> 503,719
321,835 -> 865,291
847,436 -> 754,343
381,105 -> 381,648
100,101 -> 120,101
67,324 -> 724,981
68,618 -> 316,370
202,807 -> 202,382
751,318 -> 689,318
95,811 -> 95,695
644,293 -> 644,487
715,331 -> 309,737
62,954 -> 62,605
25,37 -> 962,974
642,201 -> 178,201
102,74 -> 102,764
752,127 -> 435,444
533,875 -> 808,600
984,389 -> 984,551
420,329 -> 420,705
682,965 -> 319,602
140,416 -> 671,416
11,14 -> 984,987
833,846 -> 833,217
414,434 -> 19,829
138,384 -> 138,80
535,61 -> 208,388
900,303 -> 170,303
24,980 -> 984,20
477,794 -> 74,391
496,101 -> 462,101
981,848 -> 981,244
721,974 -> 721,911
887,135 -> 696,135
865,641 -> 865,359
194,19 -> 920,745
520,227 -> 704,227
644,755 -> 830,755
737,799 -> 56,118
259,79 -> 249,79
970,152 -> 970,545
396,389 -> 396,971
383,904 -> 510,777
199,960 -> 989,170
376,55 -> 376,427
615,566 -> 272,223
266,343 -> 334,275
842,295 -> 935,295
450,175 -> 240,175
179,842 -> 977,842
170,719 -> 708,181
172,745 -> 128,701
180,329 -> 180,336
471,762 -> 989,762
524,889 -> 807,606
255,806 -> 255,937
819,869 -> 819,714
695,339 -> 528,339
65,925 -> 786,204
814,227 -> 159,882
799,73 -> 959,73
163,177 -> 163,468
167,600 -> 167,347
742,24 -> 64,24
448,91 -> 499,91
134,602 -> 426,310
468,314 -> 107,314
175,712 -> 872,15
398,225 -> 398,502
960,64 -> 960,406
54,514 -> 54,914
626,836 -> 626,398
599,544 -> 344,289
746,635 -> 547,834
107,747 -> 824,30
347,15 -> 178,15
204,532 -> 621,115
850,523 -> 850,235
986,932 -> 986,600
891,150 -> 891,182
769,783 -> 769,540
148,269 -> 805,269
127,67 -> 957,897
851,411 -> 396,411
619,913 -> 435,913
210,808 -> 763,255
548,140 -> 896,140
495,420 -> 495,510
332,967 -> 332,412
539,613 -> 317,613
426,765 -> 426,123
980,18 -> 14,984
921,551 -> 921,923
764,88 -> 41,811
959,702 -> 959,229
171,473 -> 171,401
588,769 -> 373,769
599,695 -> 18,695
878,126 -> 108,896
852,141 -> 592,141
401,268 -> 213,268
227,988 -> 88,988
794,124 -> 704,124
276,914 -> 429,914
330,884 -> 330,816
841,591 -> 628,591
356,325 -> 356,149
718,478 -> 722,478
570,802 -> 303,802
697,782 -> 148,233
279,662 -> 279,608
460,752 -> 988,752
108,951 -> 837,222
509,371 -> 509,952
35,190 -> 90,135
684,391 -> 460,391
493,153 -> 296,153
989,744 -> 989,811
962,22 -> 214,770
122,511 -> 44,511
761,860 -> 378,860
663,599 -> 30,599
963,826 -> 177,40
921,136 -> 745,136
424,688 -> 131,688
284,299 -> 284,853
73,205 -> 73,864
152,747 -> 141,736
283,305 -> 283,19
535,537 -> 483,537
749,200 -> 749,395
259,666 -> 199,606
571,288 -> 872,589
748,503 -> 254,503
903,865 -> 501,463
641,712 -> 807,712
334,432 -> 334,388
394,442 -> 936,984
661,183 -> 275,183
346,842 -> 88,842
503,570 -> 503,745
825,388 -> 763,326
948,575 -> 948,927
708,761 -> 708,15
96,545 -> 851,545
874,71 -> 874,986
908,355 -> 552,355
296,596 -> 487,596
78,877 -> 918,37
934,969 -> 15,50
798,667 -> 333,667
111,974 -> 391,974
687,514 -> 255,514
261,751 -> 261,774
637,144 -> 637,212
268,710 -> 268,705
737,246 -> 682,246
961,143 -> 140,964
294,911 -> 187,911
372,495 -> 764,495
794,567 -> 120,567
935,681 -> 479,681
68,53 -> 989,974
395,550 -> 664,550
190,885 -> 291,885
897,667 -> 897,789
826,922 -> 47,143
468,378 -> 793,378
580,802 -> 164,802
492,321 -> 39,774
602,421 -> 252,71
79,749 -> 721,749
826,196 -> 826,728
564,632 -> 564,137
594,747 -> 594,412
964,735 -> 987,758
388,630 -> 815,203
666,892 -> 666,279
980,767 -> 980,370
607,459 -> 110,956
680,875 -> 680,65
970,893 -> 133,56
339,254 -> 339,893
347,602 -> 888,61
435,946 -> 379,946
812,855 -> 812,415
814,385 -> 814,661
721,765 -> 721,181
176,468 -> 176,379
550,947 -> 456,947
53,813 -> 838,28
29,24 -> 973,968
654,807 -> 380,807
950,266 -> 950,339
959,429 -> 959,54
35,20 -> 35,922
11,10 -> 988,987
409,554 -> 390,554
862,235 -> 116,981
716,11 -> 617,11
472,382 -> 472,441
798,549 -> 402,549
29,724 -> 29,35
333,531 -> 488,531
196,334 -> 196,166
82,394 -> 706,394
314,751 -> 314,748
657,111 -> 657,900
833,382 -> 833,813
352,479 -> 352,46
608,449 -> 608,853
687,727 -> 641,681
392,828 -> 307,828
208,244 -> 775,244
922,286 -> 89,286
762,736 -> 83,736
143,57 -> 913,827
787,933 -> 787,42
209,692 -> 447,692
99,891 -> 765,225
55,735 -> 55,909
898,75 -> 81,892
121,685 -> 158,722
415,461 -> 415,374
158,898 -> 730,326
186,988 -> 186,609
924,913 -> 924,646
35,899 -> 124,899
495,259 -> 201,259
914,828 -> 914,716
368,78 -> 734,444
735,97 -> 42,790
972,895 -> 447,895
197,834 -> 320,834
799,165 -> 14,950
348,556 -> 562,556
71,23 -> 984,936
974,871 -> 729,871
706,378 -> 817,378
885,287 -> 467,287
741,691 -> 61,11
227,632 -> 531,328
716,795 -> 160,239
327,261 -> 855,789
100,263 -> 582,745
729,72 -> 73,72
853,546 -> 853,802
399,472 -> 106,765
787,848 -> 619,848
866,150 -> 127,889
862,48 -> 34,876
579,257 -> 579,601
685,633 -> 227,175
670,161 -> 396,161
156,694 -> 785,65
232,384 -> 232,327
544,83 -> 307,83
98,273 -> 442,273
34,975 -> 988,21
739,802 -> 739,264
409,402 -> 466,402
700,95 -> 677,95
989,14 -> 16,987
921,989 -> 152,220
857,821 -> 78,42
335,114 -> 467,114
17,50 -> 904,937
757,372 -> 698,372
42,28 -> 600,586
867,617 -> 516,617
909,281 -> 909,178
254,879 -> 685,879
133,353 -> 696,353
430,146 -> 441,135
720,657 -> 720,909
389,462 -> 780,71
945,152 -> 657,440
364,570 -> 364,336
268,67 -> 254,67
171,951 -> 895,227
706,332 -> 706,380
265,703 -> 517,703
542,421 -> 542,534
900,67 -> 752,215
307,205 -> 307,321
319,111 -> 319,793
158,419 -> 499,78
32,148 -> 372,148
375,937 -> 375,241
757,928 -> 757,724
508,638 -> 508,747
68,655 -> 68,24
209,949 -> 209,782
193,359 -> 193,258
580,542 -> 799,542
556,326 -> 556,533
984,930 -> 98,44
771,447 -> 158,447
951,544 -> 951,469
100,148 -> 880,928
342,800 -> 688,800
381,839 -> 381,662
510,340 -> 499,340
114,864 -> 958,20
131,357 -> 131,913
306,877 -> 336,877
195,755 -> 892,58
63,936 -> 878,121
144,505 -> 144,945
769,25 -> 314,25
94,831 -> 198,831
121,818 -> 127,818
228,982 -> 228,788
139,730 -> 770,99
43,973 -> 953,63
837,435 -> 498,774
168,803 -> 918,53
512,346 -> 512,255
174,149 -> 986,961
436,66 -> 436,639
704,707 -> 704,259
161,101 -> 161,415
482,254 -> 42,694
39,843 -> 811,71
628,555 -> 541,555
192,274 -> 196,274
736,140 -> 606,270
910,203 -> 598,515
354,785 -> 354,294
264,663 -> 155,663
139,193 -> 139,792
212,48 -> 948,784
696,252 -> 68,880
908,29 -> 114,823
515,23 -> 515,504
977,746 -> 977,691
837,714 -> 773,714
462,921 -> 462,294
395,630 -> 931,94
336,318 -> 45,609
917,288 -> 917,534
78,590 -> 543,590
416,555 -> 416,461
272,141 -> 441,141
883,813 -> 892,822
45,90 -> 892,937
890,16 -> 146,760
506,765 -> 555,716
313,818 -> 313,649
867,668 -> 777,668
804,484 -> 804,821
374,895 -> 374,50
173,980 -> 173,796
74,45 -> 336,307
316,922 -> 866,922
187,896 -> 265,974
790,160 -> 790,290
753,907 -> 753,445
70,718 -> 168,620
565,672 -> 599,672
563,87 -> 790,87
947,635 -> 843,739
712,556 -> 712,313
928,138 -> 928,781
677,720 -> 677,982
420,131 -> 804,515
980,416 -> 314,416
790,221 -> 790,866
289,680 -> 289,343
968,591 -> 973,591
289,265 -> 289,985
448,194 -> 448,185
424,457 -> 372,405
92,825 -> 355,825
108,89 -> 434,89
785,155 -> 785,769
829,916 -> 829,879
983,159 -> 983,799
467,357 -> 467,13
552,461 -> 60,461
315,339 -> 490,164
33,14 -> 978,959
769,414 -> 879,414
546,739 -> 200,739
389,874 -> 389,456
88,372 -> 779,372
327,491 -> 801,491
130,922 -> 586,466
949,106 -> 113,942
335,257 -> 338,257
339,695 -> 621,977
819,222 -> 819,963
744,214 -> 744,158
190,630 -> 866,630
313,268 -> 313,485
158,696 -> 696,696
957,24 -> 460,521
336,795 -> 336,161
456,297 -> 619,297
781,247 -> 781,980
336,508 -> 962,508
799,185 -> 799,593
63,180 -> 508,180
281,389 -> 320,389
703,585 -> 816,698
151,758 -> 151,399
108,283 -> 156,331
988,986 -> 18,16
219,467 -> 704,467
614,909 -> 614,22
907,327 -> 410,824
869,628 -> 791,628
141,937 -> 161,937
139,866 -> 139,448
789,45 -> 78,45
852,395 -> 187,395
115,147 -> 956,988
702,274 -> 702,741
760,547 -> 760,324
749,18 -> 749,726
974,891 -> 108,25
67,646 -> 67,432
901,63 -> 61,903
929,77 -> 36,970
136,639 -> 382,639
292,687 -> 642,687
242,514 -> 698,58
613,261 -> 226,261
26,287 -> 430,287
640,713 -> 327,713
488,108 -> 488,484
257,183 -> 257,514
851,115 -> 139,115
193,375 -> 673,855`

// lines = `0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2`

// '193,375 -> 673,855'.split(' -> ')
// ['193,375', '673,855'].map( [from, two] => ({from: { x: from.split(',')[0] , y: from.split(',')[1] } , to: { x: to.split(',')[0], y: to.split(',')[1] }}) )
// Parsing
let vectors = lines
                .split('\n')
                .map( line => line.split(' -> '))
                .map( ([from, to]) => [from.split(',').map(Number), to.split(',').map(Number)])
                .map( ([from ,to]) => ({
                    from: { x: from[0] , y: from[1]},
                    to: { x: to[0], y: to[1]}
                }))
//  Part-2(include diagonals)
            //   .filter( ({from , to} ) => from.x === to.x || from.y === to.y)
// console.log(vector)
// [
//     { from : { x: 100, y : 200}, to: {x :20, y: 10}},
//     ...
// ]
// Also filter ONLY HORIZONTAL & VERTICAL


// create a Map to track each point hits

let plot = new Map()

//Generator fn, that returns point to plot as an iterable
//[{x:1, y:2}. {x:1, y:3}]
function* walk(vector) {
    if(vector.from.x === vector.to.x) {
        let step = vector.from.y > vector.to.y ? -1 : 1
        for(let y = vector.from.y ; step === 1 ? y <= vector.to.y : y >= vector.to.y ; y += step) {
            yield { x: vector.from.x, y}
        }
    } else if( vector.from.y === vector.to.y) {
        let step = vector.from.x > vector.to.x ? -1 :1
        for(let x = vector.from.x ; step === 1 ? x <= vector.to.x : x >= vector.to.x ; x += step) {
            yield { x, y: vector.from.y}
        }
    }
    else {
        let x = vector.from.x
        let y = vector.from.y
        let yStep = vector.from.y > vector.to.y ? -1 : 1
        let xStep = vector.from.x > vector.to.x ? -1 : 1
        for( ; xStep === 1 ? x <= vector.to.x : x >= vector.to.x ; x += xStep, y+=yStep) {
            yield{x,y}
        }   
    }

}

let height = 0
let width = 0

function plotGraph(plot) {
    let res = ''
    for(let i =0 ;i <= width; i++) {
        for(let j = 0; j<= height ; j++) {
            let key = `${j},${i}`
            if(!plot.has(key)) {
                res += '.'
            } else {
                res += plot.get(key)
            }
        }
        res += '\n'
    }
    console.log(res)
}

// .........
// .........
// ..1......
// ....1....
// .........
// .........
// .........
// 11111....
// .........

for( let vec of vectors) {
    for( let point of walk(vec)) {
        if(point.x > width) {
            width = point.x
        }
        if(point.y > height) {
            height  = point.y
        }
        // console.log(point)
        let key = point.x + ',' + point.y
        if(!plot.has(key)) {
            plot.set(key , 0)
        }
        plot.set(key, plot.get(key) + 1)
    }

}
// console.log(plot)
// plotGraph(plot)
let count = 0 
for(let val of plot.values()) {
    if(val > 1) {
        count++
    }
} 

console.log(count)