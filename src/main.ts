import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(process.env.PORT || 3000).then(() => {
    console.log(`Server is running on Port: ${process.env.PORT || 3000}`);
  });
}
bootstrap();
