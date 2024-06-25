async function fetchData() {
    const response = await fetch('http://localhost:3000/api/ranked-data');
    const data = await response.json();
    const backgroundContainer = document.getElementById('background-container');
    const groups = {};

    data.forEach(row => {
        if (!groups[row.GroupNumber]) {
            groups[row.GroupNumber] = [];
        }
        groups[row.GroupNumber].push(row);
    });

    for (const groupNumber in groups) {
        const groupContainer = document.createElement('div');
        groupContainer.classList.add('group-container', `group-${groupNumber}`);
        const groupTitle = document.createElement('h2');
        groupContainer.appendChild(groupTitle);

        // Reverse the rows within each group
        const reversedRows = groups[groupNumber].slice().reverse();

        reversedRows.forEach(row => {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');

            const textImageContainer = document.createElement('div');
            textImageContainer.classList.add('text-image-container');

            const textElement = document.createElement('div');
            textElement.classList.add('text-element');
            textElement.textContent = `Rank: ${row.Rank}, DateTime: ${row.DateTime}`;

            const imageElement = document.createElement('img');
            imageElement.src = `images/${row.Photo}`;
            imageElement.alt = `Photo for Rank ${row.Rank}`;
            imageElement.classList.add('data-photo');  // Class for data photos

            textImageContainer.appendChild(textElement);
            textImageContainer.appendChild(imageElement);
            rowElement.appendChild(textImageContainer);
            groupContainer.appendChild(rowElement);
        });

        backgroundContainer.appendChild(groupContainer);
    }

    const adjustBackgroundContainerHeight = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        if (backgroundPhoto) {
            backgroundContainer.style.height = `${backgroundPhoto.clientHeight}px`;
        }
    };

    const adjustBackgroundContainerWidth = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        if (backgroundPhoto) {
            backgroundContainer.style.width = `${backgroundPhoto.clientWidth}px`;
        }
    };

    const adjustGroup1Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group1 = document.querySelector('.group-1');
        if (backgroundPhoto && group1) {
            const photoHeight = backgroundPhoto.clientHeight;
            group1.style.top = `${photoHeight * 0.85}px`; // 10% from the bottom of background-photo
            const photoWidth = backgroundPhoto.clientWidth;
            group1.style.left = `${photoWidth * 0.25}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-1 position: top = ${group1.style.top}`);
        } else {
            console.log('backgroundPhoto or group1 not found.');
        }
    };

    const adjustGroup2Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group2 = document.querySelector('.group-2');
        if (backgroundPhoto && group2) {
            const photoHeight = backgroundPhoto.clientHeight;
            group2.style.top = `${photoHeight * 0.73}px`; // 10% from the bottom of background-photo
            const photoWidth = backgroundPhoto.clientWidth;
            group2.style.left = `${photoWidth * 0.28}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-2 position: top = ${group2.style.top}`);
        } else {
            console.log('backgroundPhoto or group2 not found.');
        }
    };

    const adjustGroup3Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group1 = document.querySelector('.group-3');
        if (backgroundPhoto && group1) {
            const photoHeight = backgroundPhoto.clientHeight;
            group1.style.top = `${photoHeight * 0.67}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-3 position: top = ${group1.style.top}`);
        } else {
            console.log('backgroundPhoto or group3 not found.');
        }
    };

    const adjustGroup4Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group1 = document.querySelector('.group-4');
        if (backgroundPhoto && group1) {
            const photoHeight = backgroundPhoto.clientHeight;
            group1.style.top = `${photoHeight * 0.645}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-4 position: top = ${group1.style.top}`);
        } else {
            console.log('backgroundPhoto or group4 not found.');
        }
    };

    const adjustGroup5Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group5 = document.querySelector('.group-5');
        if (backgroundPhoto && group5) {
            const photoHeight = backgroundPhoto.clientHeight;
            group5.style.top = `${photoHeight * 0.586}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-5 position: top = ${group5.style.top}`);
        } else {
            console.log('backgroundPhoto or group5 not found.');
        }
    };

    const adjustGroup6Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group6 = document.querySelector('.group-6');
        if (backgroundPhoto && group6) {
            const photoHeight = backgroundPhoto.clientHeight;
            group6.style.top = `${photoHeight * 0.535}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-6 position: top = ${group6.style.top}`);
        } else {
            console.log('backgroundPhoto or group6 not found.');
        }
    };

    const adjustGroup7Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group7 = document.querySelector('.group-7');
        if (backgroundPhoto && group7) {
            const photoHeight = backgroundPhoto.clientHeight;
            group7.style.top = `${photoHeight * 0.473}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-7 position: top = ${group7.style.top}`);
        } else {
            console.log('backgroundPhoto or group6 not found.');
        }
    };

    const adjustGroup8Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group8 = document.querySelector('.group-8');
        if (backgroundPhoto && group8) {
            const photoHeight = backgroundPhoto.clientHeight;
            group8.style.top = `${photoHeight * 0.417}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-8 position: top = ${group8.style.top}`);
        } else {
            console.log('backgroundPhoto or group6 not found.');
        }
    };

    const adjustGroup9Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group9 = document.querySelector('.group-9');
        if (backgroundPhoto && group9) {
            const photoHeight = backgroundPhoto.clientHeight;
            group9.style.top = `${photoHeight * 0.35}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-9 position: top = ${group9.style.top}`);
        } else {
            console.log('backgroundPhoto or group9 not found.');
        }
    };

    const adjustGroup10Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group10 = document.querySelector('.group-10');
        if (backgroundPhoto && group10) {
            const photoHeight = backgroundPhoto.clientHeight;
            group10.style.top = `${photoHeight * 0.28}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-10 position: top = ${group10.style.top}`);
        } else {
            console.log('backgroundPhoto or group10 not found.');
        }
    };

    const adjustGroup11Position = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        const group11 = document.querySelector('.group-11');
        if (backgroundPhoto && group11) {
            const photoHeight = backgroundPhoto.clientHeight;
            group11.style.top = `${photoHeight * 0.216}px`; // 10% from the bottom of background-photo
            console.log(`Adjusting group-11 position: top = ${group11.style.top}`);
        } else {
            console.log('backgroundPhoto or group11 not found.');
        }
    };

    window.addEventListener('resize', () => {
        adjustBackgroundContainerHeight();
        adjustBackgroundContainerWidth();
        adjustGroup1Position();
        adjustGroup2Position();
        adjustGroup3Position();
        adjustGroup4Position();
        adjustGroup5Position();
        adjustGroup6Position();
        adjustGroup7Position();
        adjustGroup8Position();
        adjustGroup9Position();
        adjustGroup10Position();
        adjustGroup11Position();
    });
    adjustBackgroundContainerHeight();
    adjustBackgroundContainerWidth();
    adjustGroup1Position();
    adjustGroup2Position();
    adjustGroup3Position();
    adjustGroup4Position();
    adjustGroup5Position();
    adjustGroup6Position();
    adjustGroup7Position();
    adjustGroup8Position();
    adjustGroup9Position();
    adjustGroup10Position();
    adjustGroup11Position();
}

fetchData();



//////////////////////////////////////////////////////////////////////////////////////////////////////////\
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

async function fetchData() {
    const response = await fetch('http://localhost:3000/api/ranked-data');
    const data = await response.json();
    const backgroundContainer = document.getElementById('background-container');
    const groups = {};

    data.forEach(row => {
        if (!groups[row.GroupNumber]) {
            groups[row.GroupNumber] = [];
        }
        groups[row.GroupNumber].push(row);
    });

    for (const groupNumber in groups) {
        const groupContainer = document.createElement('div');
        groupContainer.classList.add('group-container', `group-${groupNumber}`);
        groupContainer.style.position = 'absolute';

        const groupTitle = document.createElement('h2');
        groupContainer.appendChild(groupTitle);

        // Reverse the rows within each group
        const reversedRows = groups[groupNumber].slice().reverse();

        reversedRows.forEach(row => {
            const rowElement = document.createElement('div');
            rowElement.classList.add('row');
            rowElement.style.position = 'relative';

            const textImageContainer = document.createElement('div');
            textImageContainer.classList.add('text-image-container');
            textImageContainer.style.position = 'relative';

            const textElement = document.createElement('div');
            textElement.classList.add('text-element');

            // Format DateTime
            const dateTime = new Date(row.DateTime);
            const options = {
                month: 'numeric',
                day: 'numeric',
                year: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            };
            const formattedDateTime = dateTime.toLocaleString('en-US', options).replace(/, /g, ' ');

            textElement.innerHTML = `VIN: ${row.VIN}<br>Date: ${formattedDateTime}<br>Defect Count: ${row['Problem Count']}`;
            textElement.style.position = 'absolute';
            textElement.style.zIndex = '1'; /* Ensure the text element is in front of other elements */

            const imageElement = document.createElement('img');
            imageElement.src = `images/${row.Photo}`;
            imageElement.alt = `Photo for Rank ${row.Rank}`;
            imageElement.classList.add('data-photo');
            imageElement.dataset.rank = row.Rank;  // Add this line to set the data-rank attribute
            imageElement.style.position = 'relative';

            textImageContainer.appendChild(imageElement);
            textImageContainer.appendChild(textElement);
            rowElement.appendChild(textImageContainer);
            groupContainer.appendChild(rowElement);
        });

        backgroundContainer.appendChild(groupContainer);
    }

    const adjustBackgroundContainerHeight = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        if (backgroundPhoto) {
            backgroundContainer.style.height = `${backgroundPhoto.clientHeight}px`;
        }
    };

    const adjustBackgroundContainerWidth = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        if (backgroundPhoto) {
            backgroundContainer.style.width = `${backgroundPhoto.clientWidth}px`;
        }
    };

    const adjustGroupPositions = () => {
        const backgroundPhoto = document.querySelector('.background-photo');
        if (!backgroundPhoto) return;

        const positions = [
            { group: 'group-1', top: 0.84, left: 0.25 },
            { group: 'group-2', top: 0.722, left: 0.28 },
            { group: 'group-3', top: 0.67, left: 0.575 },
            { group: 'group-4', top: 0.641 },
            { group: 'group-5', top: 0.581 },
            { group: 'group-6', top: 0.528 },
            { group: 'group-7', top: 0.465 },
            { group: 'group-8', top: 0.41 },
            { group: 'group-9', top: 0.342 },
            { group: 'group-10', top: 0.27 },
            { group: 'group-11', top: 0.205 },
        ];

        positions.forEach(pos => {
            const group = document.querySelector(`.${pos.group}`);
            if (group) {
                group.style.top = `${backgroundPhoto.clientHeight * pos.top}px`;
                if (pos.left !== undefined) {
                    group.style.left = `${backgroundPhoto.clientWidth * pos.left}px`;
                }
            }
        });
    };

    window.addEventListener('resize', () => {
        adjustBackgroundContainerHeight();
        adjustBackgroundContainerWidth();
        adjustGroupPositions();
    });

    adjustBackgroundContainerHeight();
    adjustBackgroundContainerWidth();
    adjustGroupPositions();
}

fetchData();
