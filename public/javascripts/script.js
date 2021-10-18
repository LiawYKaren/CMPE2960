$( function(){ // equivalent of ready..
    console.log('javascript test');
    CreateCategoryTable();
});
function CreateCategoryTable()
{

    let tblCategory =  $('#Categories');
    tblCategory.empty();

    let thArray = ["CategoryID","Name","Details", "Op"];

    
    let tRow = document.createElement("tr");
    tblCategory.append(tRow);
    for (let head in thArray)
    {
        let tCell = document.createElement("th");
        tRow.appendChild(tCell);
        let cellText = document.createTextNode(thArray[head]);
        tCell.appendChild(cellText);
    }

    console.log('Function = CreateCategoryTable');

}