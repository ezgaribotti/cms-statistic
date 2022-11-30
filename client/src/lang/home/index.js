const lang = {
    special_bar: "Una interfaz sencilla y agradable",
};

lang.app_bar = {
    about_us: "Sobre Statistic",
    usage: "Modo de uso",
    create_feedback: "Deja tu comentario",
};

lang.about_us = {
    title: "Un CMS dentro de una aplicación web fácil de usar",
    subtitle: "La aplicación está adaptada para dispositivos móviles",
    info_text: "Un sistema de gestión de contenidos (CMS). Adaptable a integraciones vía Rest API, protegido con autenticación de token de acceso, roles y permisos. Visualización de estadísticas con gráficos y gestión de pedidos con una interfaz intuitiva",
    questions: "Más información",
    contact_me: "Si tiene alguna pregunta sobre el proyecto, puede ponerse en contacto conmigo para responder a su pregunta",
};

lang.back_to_top = {
    title: "Volver al inicio",
};

lang.create_feedback = {
    title: "Deja tu comentario sobre la aplicación",
    info_text: "Al final de crear un pedido puedes dejar un comentario. Copie el número de pedido e introdúzcalo aquí dando su comentario sobre lo que piensa de la aplicación. Los datos ingresados dentro de la aplicación después de un período de tiempo específico serán eliminados, pero no sin antes leerlo personalmente",
};

lang.usage = {
    title: "Cómo funciona la aplicación",
    info_text: "Para comenzar debe autenticarse con los siguientes usuarios. Cada usuario tiene su respectivo rol por el cual estarán limitados. Posteriormente, una vez autenticado, podrás acceder al panel de control donde dado tu usuario, podrás comenzar a operar dentro de la aplicación",
    select_customer: {
        title: "Seleccionar cliente",
        description: "Para empezar debes seleccionar un cliente. Una alerta confirma que la selección del cliente fue exitosa",
    },
    add_products: {
        title: "Añadir productos",
        description: "Ahora puedes añadir todos los productos que el cliente quiere pedir. Para uso práctico se pueden agregar los productos sin tener que seleccionar el cliente",
    },
    go_to_cart: {
        title: "Ir al carrito",
        description: "Una vez añadidos los productos, puedes consultar la información del pedido yendo al carrito",
    },
    finalize: {
        title: "Finalizar pedido",
        description: "Para finalizar el pedido, opcionalmente puede agregar un comentario y hacer clic en el botón Finalizar. Automáticamente al crear el pedido serás redirigido",
    },
    users: {
        admin: {
            title: "Administrador",
            description: "Este usuario tiene todos los permisos y también puede administrar usuarios nuevos o existentes",
        },
        manager: {
            title: "Supervisor",
            description: "Este usuario tiene todos los permisos excepto para eliminar un artículo",
        },
        guest: {
            title: "Invitado",
            description: "Este usuario solo tiene permiso para ver artículos",
        },
    },
    table_info: "Puede ver los permisos de cada usuario haciendo clic en",
    create_order: "Cómo realizar un pedido",
};

export default lang;
