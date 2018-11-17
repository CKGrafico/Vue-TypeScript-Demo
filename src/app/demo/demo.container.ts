import { Container } from 'inversify';
import { injectId } from '~/core';

export default (container: Container) => {
    // container.bind<IWeatherService>(injectId(WeatherService)).to(WeatherService).inSingletonScope();
};