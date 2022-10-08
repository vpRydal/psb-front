import api from '@api';
import DefaultRequest from '@specs/_misc/request';

const fetchTest = () => api.get<DefaultRequest<string>>('');

export default fetchTest;
