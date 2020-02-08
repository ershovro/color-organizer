import { v4 } from 'uuid'; 

const addColor = (title, color) =>
    ({
        type: "ADD_COLOR",
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()
    })

const removeColor = id =>
    ({
        type: "REMOVE_COLOR",
        id
    })

const rateColor = (id, rating) =>
    ({
        type: "RATE_COLOR",
        id,
        rating
    })

const sortColors = sortedBy =>
    (sortedBy === "rating") ?
        ({
            type: "SORT_COLORS",
            sortBy: "SORTED_BY_RATING"
        }) :
        (sortedBy === "title") ?
            ({
                type: "SORT_COLORS",
                sortBy: "SORTED_BY_TITLE"
            }) :
            ({
                type: "SORT_COLORS",
                sortBy: "SORTED_BY_DATE"
            })
