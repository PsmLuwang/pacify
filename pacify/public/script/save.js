// this is sample array
// need to push in database instead of pushing in the array
var savedReceipt = [
    {
        'remark' : 'This is remark 01',
        'discount' : '42%',
        'date' : '01-Feb-2024',
        'totalVp' : 205.63,
        'totalQty' : 12,
        'totalAmt' : 20665,
        'products' : [
            {
                'name' : 'Formula 1' ,
                'vp' : 21.75 ,
                'd42' : 1503 ,
                'qty' : 1
            },
            {
                'name' : 'PPP - 200g' ,
                'vp' : 11.50 ,
                'd42' : 893 ,
                'qty' : 2
            },
            {
                'name' : 'PPP - 400g' ,
                'vp' : 22.50 ,
                'd42' : 1714 ,
                'qty' : 1
            },
            {
                'name' : 'ShakeMate' ,
                'vp' : 6.45 ,
                'd42' : 564 ,
                'qty' : 1
            },
            {
                'name' : 'Ocular Defence' ,
                'vp' : 19.25 ,
                'd42' : 1330 ,
                'qty' : 3
            },
            {
                'name' : 'Male Factor' ,
                'vp' : 34.75 ,
                'd42' : 2352 ,
                'qty' : 2
            },
        ]
    },

    {
        'remark' : 'This is remark 02',
        'discount' : '42%',
        'date' : '20-Jan-2024',
        'totalVp' : 155.03,
        'totalQty' : 5,
        'totalAmt' : 12032,
        'products' : [
            {
                'name' : 'Formula 1' ,
                'vp' : 21.75 ,
                'd42' : 1503 ,
                'qty' : 1
            },
            {
                'name' : 'PPP - 200g' ,
                'vp' : 11.50 ,
                'd42' : 893 ,
                'qty' : 2
            },
            {
                'name' : 'PPP - 400g' ,
                'vp' : 22.50 ,
                'd42' : 1714 ,
                'qty' : 1
            },
            {
                'name' : 'ShakeMate' ,
                'vp' : 6.45 ,
                'd42' : 564 ,
                'qty' : 1
            },
            {
                'name' : 'Ocular Defence' ,
                'vp' : 19.25 ,
                'd42' : 1330 ,
                'qty' : 3
            },
            {
                'name' : 'Male Factor' ,
                'vp' : 34.75 ,
                'd42' : 2352 ,
                'qty' : 2
            },
        ]
    },

    {
        'remark' : 'This is remark 03',
        'discount' : '42%',
        'date' : '17-Jan-2024',
        'totalVp' : 52.67,
        'totalQty' : 3,
        'totalAmt' : 12043,
        'products' : [
            {
                'name' : 'Formula 1' ,
                'vp' : 21.75 ,
                'd42' : 1503 ,
                'qty' : 1
            },
            {
                'name' : 'PPP - 200g' ,
                'vp' : 11.50 ,
                'd42' : 893 ,
                'qty' : 2
            },
            {
                'name' : 'PPP - 400g' ,
                'vp' : 22.50 ,
                'd42' : 1714 ,
                'qty' : 1
            },
            {
                'name' : 'ShakeMate' ,
                'vp' : 6.45 ,
                'd42' : 564 ,
                'qty' : 1
            },
            {
                'name' : 'Ocular Defence' ,
                'vp' : 19.25 ,
                'd42' : 1330 ,
                'qty' : 3
            },
            {
                'name' : 'Male Factor' ,
                'vp' : 34.75 ,
                'd42' : 2352 ,
                'qty' : 2
            },
        ]
    },
]

// loop to display the saved receipt fro the array or database.
// note: it display only the main details like totals but not all the items names or details  
var receiptSummaryComponentDiv = document.getElementById('receiptSummaryComponentDiv');
for (var i = 0; i < savedReceipt.length; i++) {
    var rowReceipt = `
        <div class="receiptSummaryComponent">
            <div class="receiptUpperPart">
                <div class="top">
                    <b class="remark">Remark:</b>
                    <b>Date: ${savedReceipt[i].date}</b>
                    <button>x</button>
                </div>
                <div class="remarkText">
                    <p>
                        ${savedReceipt[i].remark}
                    </p>
                </div>
            </div>

            <div class="receiptLowerPart">
                <b class="totalVp">${savedReceipt[i].totalVp} vp</b>
                <b>Total qty. ${savedReceipt[i].totalQty}</b>
                <div class="totalDiv">
                    <b>₹${savedReceipt[i].totalAmt}/-</b>
                </div>
            </div>
        </div>
    `;
    receiptSummaryComponentDiv.innerHTML += rowReceipt;
}