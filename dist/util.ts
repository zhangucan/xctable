import  _ from "lodash";

const getColumns = data => {
  const source: any = _.head(data);
  const datapoints: any[] = source['datapoints'];
  const head1: any[] = _.head(datapoints);
  const head2: string = _.head(head1);
  const columns = JSON.parse(head2);
  const keys: string[] = _.keys(columns);
  return keys.map(text => ({text}))
};
const getValues = data => {
  const datapoints: any[] = _.head(data)['datapoints'];
  return datapoints.map(point => {
    const time = point[1];
    const values = _.values(JSON.parse(point[0])) 
    return [time, ...values]
  })
}

export {getColumns, getValues};
