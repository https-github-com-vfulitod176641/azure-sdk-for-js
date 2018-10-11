/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/credentialOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a CredentialOperations. */
export class CredentialOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a CredentialOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Delete the credential.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, credentialName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, credentialName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, credentialName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, credentialName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        credentialName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve the credential identified by credential name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param [options] The optional parameters
   * @returns Promise<Models.CredentialGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, credentialName: string, options?: msRest.RequestOptionsBase): Promise<Models.CredentialGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, credentialName: string, callback: msRest.ServiceCallback<Models.Credential>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, credentialName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Credential>): void;
  get(resourceGroupName: string, automationAccountName: string, credentialName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Credential>): Promise<Models.CredentialGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        credentialName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CredentialGetResponse>;
  }

  /**
   * Create a credential.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the create or update credential operation.
   * @param parameters The parameters supplied to the create or update credential operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CredentialCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, credentialName: string, parameters: Models.CredentialCreateOrUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.CredentialCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the create or update credential operation.
   * @param parameters The parameters supplied to the create or update credential operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, credentialName: string, parameters: Models.CredentialCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.Credential>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the create or update credential operation.
   * @param parameters The parameters supplied to the create or update credential operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, credentialName: string, parameters: Models.CredentialCreateOrUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Credential>): void;
  createOrUpdate(resourceGroupName: string, automationAccountName: string, credentialName: string, parameters: Models.CredentialCreateOrUpdateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Credential>): Promise<Models.CredentialCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        credentialName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.CredentialCreateOrUpdateResponse>;
  }

  /**
   * Update a credential.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the Update credential operation.
   * @param parameters The parameters supplied to the Update credential operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CredentialUpdateResponse>
   */
  update(resourceGroupName: string, automationAccountName: string, credentialName: string, parameters: Models.CredentialUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.CredentialUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the Update credential operation.
   * @param parameters The parameters supplied to the Update credential operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, credentialName: string, parameters: Models.CredentialUpdateParameters, callback: msRest.ServiceCallback<Models.Credential>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the Update credential operation.
   * @param parameters The parameters supplied to the Update credential operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, credentialName: string, parameters: Models.CredentialUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Credential>): void;
  update(resourceGroupName: string, automationAccountName: string, credentialName: string, parameters: Models.CredentialUpdateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Credential>): Promise<Models.CredentialUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        credentialName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.CredentialUpdateResponse>;
  }

  /**
   * Retrieve a list of credentials.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.CredentialListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.CredentialListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.CredentialListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CredentialListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CredentialListResult>): Promise<Models.CredentialListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.CredentialListByAutomationAccountResponse>;
  }

  /**
   * Retrieve a list of credentials.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CredentialListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CredentialListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CredentialListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CredentialListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CredentialListResult>): Promise<Models.CredentialListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.CredentialListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.credentialName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.credentialName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Credential
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.credentialName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CredentialCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Credential
    },
    201: {
      bodyMapper: Mappers.Credential
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials/{credentialName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.credentialName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CredentialUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Credential
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/credentials",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CredentialListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByAutomationAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CredentialListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
