import axios, {
  CancelTokenSource,
  CancelToken,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosRequestHeaders,
} from 'axios';
import {Currency} from 'models/api/currency';
import {Alert} from 'react-native';

class AxiosConfig implements AxiosRequestConfig {
  public cancelToken: CancelToken;
  public headers: AxiosRequestHeaders | undefined;

  public constructor(
    cancelTokenSource: CancelTokenSource,
    contentType: string | number | boolean = 'application/json',
  ) {
    this.cancelToken = cancelTokenSource.token;
    this.headers = {
      'Content-Type': contentType,
    };
  }
}

export class ApiService {
  private cancelTokenSource: CancelTokenSource;
  private canceledRequestMessage = 'canceled';
  public ref = 0;

  public constructor() {
    this.cancelTokenSource = axios.CancelToken.source();
    this.ref += new Date().getTime() * Math.random();
  }

  public cancelAllRequests = (): void => {
    if (!this.cancelTokenSource) {
      return;
    }
    this.cancelTokenSource.cancel(this.canceledRequestMessage);
  };

  public static handleException = (error: any) => {
    if (axios.isCancel(error)) {
      return;
    }
    if (error.message === 'Network Error') {
      Alert.alert(
        'Internet connection',
        'There was an error connecting to the server. \n Please check if Wi-Fi or mobile data is turned on.',
      );
    }
  };

  private get = async (url: string): Promise<AxiosResponse<any>> => {
    return axios.get(url, new AxiosConfig(this.cancelTokenSource));
  };

  public getExchangeCurrency = async (
    url: string,
  ): Promise<AxiosResponse<Currency>> => {
    return this.get(url);
  };
}
