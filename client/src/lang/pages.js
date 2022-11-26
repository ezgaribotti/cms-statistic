
const lang = {
    edit_form: {
        success: "Registro editado con éxito",
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
        featured: {
            customers: "Clientes destacados",
            products: "Productos destacados"
        },
        wallet: {
            title: "Billetera",
            profit_amount: "Total de ingresos",
            refund_amount: "Total de devoluciones",
            income_amount: "Total restante"
        },
        history: {
            title: "Resumen anual"
        }
    },
    order_details: {
        data: {
            id: "Id",
            name: "Producto",
            fixed_price: "Precio fijado",
            quantity: "Cantidad",
            partial_amount: "Monto parcial"
        },
        alert: {
            title: "Comentario"
        },
        details: {
            order_number: "Pedido número",
            status: "Estado del pedido",
            payment_amount: "Total pagado",
            refund_amount: "Total devuelto",
        },
        badge: {
            title: "Lista de artículos"
        }
    },
    cart: {
        order_success: "Pedido creado con éxito",
        data: {
            name: "Producto",
            unit_price: "Precio unitario",
            quantity: "Cantidad",
            partial_amount: "Monto parcial"
        },
        redirect_link: "Agregar productos",
        order: {
            title: "Detales del pedido",
            description: "Comentario",
            total_amount: "Monto total",
            pay_button: "Pagar"
        },
        clean_cart: "Vaciar carrito",
    },
    products: {
        add_item: "Producto agregado al carrito",
    },
    customers: {
        set_payer: "Cliente seleccionado con éxito"
    }
};

export default lang;
