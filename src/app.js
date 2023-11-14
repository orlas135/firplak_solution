import express from 'express';
import config from './config';
import enviosRoutes from './routes/envios.routes';
import clientesRoutes from './routes/clientes.routes';
import remisionesRoutes from './routes/clientes.routes';
import sucursalesRoutes from './routes/clientes.routes';
import transportadorasRoutes from './routes/clientes.routes';
import pedidosRoutes from './routes/pedidos.routes'
import productosRoutes from './routes/pedidos.routes'

const app = express();

app.set('port', config.port);

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(enviosRoutes);
app.use(clientesRoutes);
app.use(remisionesRoutes);
app.use(sucursalesRoutes);
app.use(transportadorasRoutes);
app.use(pedidosRoutes);
app.use(productosRoutes);
export default app;