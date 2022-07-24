const values = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

export const getId = () => {
    let id = '';
    Array.from({ length : 15 }).forEach(() => {
        let indexValue = Math.floor(Math.random() * ((values.length - 1) + 1));
        id += values[indexValue];
    });

    return id;
}

