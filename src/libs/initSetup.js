'use strict';
import Role from "../models/Role";
export const createRoles = async () => {
    try {
        // verifica si existen documentos con roles creador
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return;
        // ejecuta las 3 funciones de guardado al mismo tiempo
        // se engloba todas en Promise.all()
        const values = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save()
        ]);
        console.log('values:', values);
    } catch (error) {
        console.error(error);
    }
}


