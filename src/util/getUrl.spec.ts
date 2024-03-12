import { expect } from 'chai';
import { getUrl } from "./getUrl.js";
import { Request } from 'express';

describe('getUrl function', () => {
  it('should generate a URL without query parameters', () => {
    const req: Partial<Request> = {
      params: { formId: '123' },
      query: {}
    };

    const result = getUrl(req as Request);
    expect(result).to.equal('https://api.fillout.com/v1/api/forms/123/submissions');
  });

  it('should generate a URL with query parameters', () => {
    const req: Partial<Request> = {
      params: { formId: '456' },
      query: {
        param1: 'value1',
        param2: 'value2'
      }
    };

    const result = getUrl(req as Request);
    expect(result).to.equal('https://api.fillout.com/v1/api/forms/456/submissions?param1=value1&param2=value2');
  });

});