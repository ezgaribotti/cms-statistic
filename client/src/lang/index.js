const lang = {
    errors: {
        required: "Uno o más campos se encuentran vacíos o no son el tipo requerido para continuar",
        credentials: "Las credenciales ingresadas no son válidas",
        unauthorized: "No tienes los permisos correspondientes para acceder"
    },
    components: {
        app_bar: {
            logout_button: "Cerrar sesión",
        },
        sidebar: {
            quick_access: "Acceso rápido"
        },
        loader: {
            loading_info: "Cargando información..."
        },
        data_table: {
            create_button: "Crear",
            page: "Página",
            search_here: "Buscar aquí",
            clear_search: "Borrar búsqueda",
        }
    },
    edit_form: {
        success: "Registro editado con éxito",
        default_inputs: {
            updated_at: "Última actualización"
        },
        submit_button: "Editar"
    },
    create_form: {
        success: "Registro creado con éxito",
        submit_button: "Crear"
    },
    login: {
        submit_button: "Iniciar sesión",
        go_back: "Volver al inicio",
    },
    confirm_delete: {
        success: "Registro eliminado con éxito",
        confirm_button: "Aceptar",
        alert: {
            title: "Advertencia",
            warning_text: "Si acepta eliminar el registro no se podrá recuperar de nuevo. ¿Estás seguro de eliminar el registro?"
        }
    }
};

export default lang;
