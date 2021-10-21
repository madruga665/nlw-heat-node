import { serverHttp } from "./app";

const PORT = 4000;

serverHttp.listen(PORT, () => 
  console.log(`🚀️ app rodando na porta ${PORT}`)
);