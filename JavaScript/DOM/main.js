/* Exercise 1
Now let's add content to an HTML document instead of writing to the console. 
Write a function called addBands myBandList) that will list your favorite bands. 
Start with an empty HTML page that contains a level 1 heading "My Favorite Bands" and an empty unordered list with ID band-list.

Your function should use the JavaScript DOM to create list items and add them to the unordered list, with one list item for each string in array myBandList.

For example, if I call:

addBands(['Dire Straits', 'Kansas', 'Steely Dan']);

The function will add three list items to the unordered list. */

let myBandList = ['Dire Straits', 'Kansas', 'Steely Dan'];

function addBands (str) {
    const unorderedList = document.querySelector('#band-list');
    const listItem = document.createElement('li')
    listItem.setAttribute('class', 'band-list' )
    listItem.textContent = str;
    unorderedList.appendChild(listItem);
}

for (let i = 0; i < myBandList.length; i++) {
    addBands(myBandList[i]);
}

/* Exercise 2
Write a function called addMultTable(rows, cols) that will create a multiplication table like this. Start with an empty HTML page that only contains a level 1 heading.

Your function should use the JavaScript DOM to insert an HTML table after the heading.

For example, if I call:

addMultTable(4, 8);

It will create an HTML table with 4 rows and 8 columns, and append it after the level 1 heading. */

function addMultiTable(rows, cols) {
    const afterH1 = document.querySelector('#second-heading');
    const maintable = document.createElement('table')
    afterH1.appendChild(maintable);
    for (let i = 0; i < rows; i++) {
        const insideTable = document.querySelector('table');
        const addRow = document.createElement('tr');
        insideTable.appendChild(addRow);
        for (let x = 0; x < cols; x++) {
            const addCols = document.createElement('td')
            addRow.appendChild(addCols);
        }
    }
}

addMultiTable(36, 4);
