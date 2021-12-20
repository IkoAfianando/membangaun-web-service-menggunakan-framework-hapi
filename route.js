const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return `Homepage`;
        }
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return `Halaman tidak dapat diaksed di method tersebut`;
        },
    },

    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return `About Page`;
        }
    },

    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return `Halaman tidak dapat diaksed di method tersebut`;
        },
    },

    {
        method: "GET",
        path: "/hello/{name?}",
        handler: (request, h) => {
            const { name = "iko ganteng boy" } = request.params;
            return `Hello ${name}!`;
        }
    },

    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return `Halaman tidak ditemukan`;
        }
    }
];

module.exports = routes;