-- Active: 1690389526670@@127.0.0.1@3306@db_api_hotel

-- UPDATE reservations SET date_output = '2023-09-13' WHERE id = 1;

-- SELECT

--     @fecha_inicio := date_output

-- FROM reservations

-- WHERE room_number = 502;

-- INSERT INTO

--     reservations(

--         room_number,

--         priceRoom,

--         user_id,

--         host_document,

--         date_entry,

--         date_output,

--         num_childres,

--         num_adults,

--         state,

--         create_at

--     )

-- SELECT

--     502,

--     893,

--     1,

--     1,

--     "2023-10-09",

--     "2023-10-24",

--     12,

--     23,

--     "reservada",

--     "2023-09-27 15:57:07"

-- WHERE (

--         SELECT id

--         FROM reservations

--         WHERE

--             room_number = 502

--             AND (

--                 AND '2023-10-24' > date_output

--             )

--             OR state <> "reservada"

--     );

SELECT
    description,
    room_number,
    floor,
    date_entry,
    date_output
from rooms ro
    inner join reservations res on res.room_number = ro.number
WHERE (
        NOT 2023 -09 -27 00: 00: 00 BETWEEN date_entry AND date_output
    )
    AND (
        NOT 2023 -09 -28 00: 00: 00 BETWEEN date_entry AND date_output
    ) (
        SELECT
    ) # donde INVERTIR la fechaActual2023-09-27 00:00:00 estéEntre 2023-09-18 00:00:00 Y 2023-09-30 00:00:00

#si retorna algo, no es posible hacer la reserva porque se cruza con otra ya realizada.

SELECT
    room_number,
    date_entry,
    date_output
FROM rooms ro
    INNER JOIN reservations res on res.room_number = ro.number
WHERE (
        (date_entry BETWEEN "2023-09-25 00:00:00" AND "2023-09-27 00:00:00") OR 
        (date_output BETWEEN "2023-09-25 00:00:00" AND "2023-09-27 00:00:00")
    )
    OR (
        ("2023-09-25 00:00:00" BETWEEN date_entry AND date_output) OR
        ("2023-09-27 00:00:00" BETWEEN date_entry AND date_output)
    )


SELECT
    room_number,
    date_entry,
    date_output
from rooms ro
    FULL OUTER JOIN reservations res on res.room_number = ro.number


