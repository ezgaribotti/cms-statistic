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
    layouts: {
        control_panel: {
            copyright: "All rights reserved. Statistic"
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
        inputs: {
            username: "Usuario",
            password: "Contraseña"
        }
    },
    confirm_delete: {
        success: "Registro eliminado con éxito",
        confirm_button: "Aceptar",
        alert: {
            title: "Eliminar registro",
            warning_text: "Si acepta eliminar el registro no se podrá recuperar de nuevo. ¿Estás seguro de eliminar el registro?"
        }
    },
    user_profile: {
        data: {
            id: "Id",
            full_name: "Nombre completo",
            username: "Usuario",
            role: "Rol",
            updated_at: "Última actualización"
        },
        update_password: {
            inputs: {
                password: "Contraseña",
                password_confirmation: "Confirmar contraseña",
            },
            success: "Contraseña actualizada con éxito",
            title: "Actualizar contraseña",
            alert: {
                title: "Información importante",
                warning_text: "Al actualizar la contraseña y olvidarse la misma, comuníquese con el administrador o el soporte técnico para restaurarla"
            },
            submit_button: "Actualizar",
        },
    },
    dashboard: {
        full_count: {
            customers: "Clientes",
            orders: "Pedidos",
            canceled_orders: "Pedidos cancelados",
            feedbacks: "Comentarios",
        },
        overall_status: {
            genders: "Géneros",
            feedback_rating: "Clasificación de comentarios",
            active_customers: "Clientes activos"
        },
    }
};

export default lang;
