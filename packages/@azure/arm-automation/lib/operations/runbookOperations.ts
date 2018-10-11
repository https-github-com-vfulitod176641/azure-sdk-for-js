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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/runbookOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a RunbookOperations. */
export class RunbookOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a RunbookOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Publish runbook draft.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The parameters supplied to the publish runbook operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookPublishResponse>
   */
  publish(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase): Promise<Models.RunbookPublishResponse> {
    return this.beginPublish(resourceGroupName,automationAccountName,runbookName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RunbookPublishResponse>;
  }

  /**
   * Retrieve the content of runbook identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookGetContentResponse>
   */
  getContent(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase): Promise<Models.RunbookGetContentResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param callback The callback
   */
  getContent(resourceGroupName: string, automationAccountName: string, runbookName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getContent(resourceGroupName: string, automationAccountName: string, runbookName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getContent(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<Models.RunbookGetContentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        options
      },
      getContentOperationSpec,
      callback) as Promise<Models.RunbookGetContentResponse>;
  }

  /**
   * Retrieve the runbook identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase): Promise<Models.RunbookGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, callback: msRest.ServiceCallback<Models.Runbook>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Runbook>): void;
  get(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Runbook>): Promise<Models.RunbookGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RunbookGetResponse>;
  }

  /**
   * Create the runbook identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param parameters The create or update parameters for runbook. Provide either content link for a
   * published runbook or draft, not both.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, runbookName: string, parameters: Models.RunbookCreateOrUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.RunbookCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param parameters The create or update parameters for runbook. Provide either content link for a
   * published runbook or draft, not both.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, runbookName: string, parameters: Models.RunbookCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.Runbook>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param parameters The create or update parameters for runbook. Provide either content link for a
   * published runbook or draft, not both.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, runbookName: string, parameters: Models.RunbookCreateOrUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Runbook>): void;
  createOrUpdate(resourceGroupName: string, automationAccountName: string, runbookName: string, parameters: Models.RunbookCreateOrUpdateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Runbook>): Promise<Models.RunbookCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.RunbookCreateOrUpdateResponse>;
  }

  /**
   * Update the runbook identified by runbook name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param parameters The update parameters for runbook.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookUpdateResponse>
   */
  update(resourceGroupName: string, automationAccountName: string, runbookName: string, parameters: Models.RunbookUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.RunbookUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param parameters The update parameters for runbook.
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, runbookName: string, parameters: Models.RunbookUpdateParameters, callback: msRest.ServiceCallback<Models.Runbook>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param parameters The update parameters for runbook.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, runbookName: string, parameters: Models.RunbookUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Runbook>): void;
  update(resourceGroupName: string, automationAccountName: string, runbookName: string, parameters: Models.RunbookUpdateParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Runbook>): Promise<Models.RunbookUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.RunbookUpdateResponse>;
  }

  /**
   * Delete the runbook by name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, runbookName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The runbook name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, runbookName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve a list of runbooks.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.RunbookListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.RunbookListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunbookListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RunbookListResult>): Promise<Models.RunbookListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.RunbookListByAutomationAccountResponse>;
  }

  /**
   * Publish runbook draft.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param runbookName The parameters supplied to the publish runbook operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPublish(resourceGroupName: string, automationAccountName: string, runbookName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        automationAccountName,
        runbookName,
        options
      },
      beginPublishOperationSpec,
      options);
  }

  /**
   * Retrieve a list of runbooks.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RunbookListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RunbookListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RunbookListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunbookListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RunbookListResult>): Promise<Models.RunbookListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.RunbookListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getContentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/content",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Runbook
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RunbookCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Runbook
    },
    201: {
      bodyMapper: Mappers.Runbook
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RunbookUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Runbook
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RunbookListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginPublishOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/publish",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.runbookName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {
      headersMapper: Mappers.RunbookPublishHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
      bodyMapper: Mappers.RunbookListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
