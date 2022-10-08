import api from '@api';
import DefaultRequest from '@specs/_misc/request';

const fetchTest = () => api.get<DefaultRequest<string>>('hello');

export default fetchTest;
