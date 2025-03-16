create procedure op_all()
    language plpgsql
as
$$
BEGIN
    BEGIN
        CALL op_users(0, 'JCSB18', 'jsuazab18@gmail.com'); -- Usar valores que sepas que existen
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Ha ocurrido un error: %', SQLERRM;
            ROLLBACK;
    END;

    BEGIN
        CALL op_artists(0, 'JCSB18', 'jsuazab18@gmail.com'); -- Usar valores que sepas que existen
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Ha ocurrido un error: %', SQLERRM;
            ROLLBACK;
    END;
    
END;
$$;