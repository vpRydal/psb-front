import CustomerType from '@specs/_misc/сustomer-type';

type CustomerTypeReplyVariantsData = (typeof CustomerType[keyof typeof CustomerType])[]

export default CustomerTypeReplyVariantsData;
