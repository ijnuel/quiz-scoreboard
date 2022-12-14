/**
 * AllPUDB
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { PartyVotesDto } from '../model/partyVotesDto';
import { VoteResult } from '../model/voteResult';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class VotesService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param lgaId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVotesGetPartyVotesByLgaGet(lgaId?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<VoteResult>>;
    public apiVotesGetPartyVotesByLgaGet(lgaId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VoteResult>>>;
    public apiVotesGetPartyVotesByLgaGet(lgaId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VoteResult>>>;
    public apiVotesGetPartyVotesByLgaGet(lgaId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (lgaId !== undefined && lgaId !== null) {
            queryParameters = queryParameters.set('lgaId', <any>lgaId);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<VoteResult>>('get',`${this.basePath}/api/Votes/GetPartyVotesByLga`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param stateId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVotesGetPartyVotesByStateGet(stateId?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<VoteResult>>;
    public apiVotesGetPartyVotesByStateGet(stateId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VoteResult>>>;
    public apiVotesGetPartyVotesByStateGet(stateId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VoteResult>>>;
    public apiVotesGetPartyVotesByStateGet(stateId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (stateId !== undefined && stateId !== null) {
            queryParameters = queryParameters.set('stateId', <any>stateId);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<VoteResult>>('get',`${this.basePath}/api/Votes/GetPartyVotesByState`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param wardId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVotesGetPartyVotesByWardGet(wardId?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<VoteResult>>;
    public apiVotesGetPartyVotesByWardGet(wardId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VoteResult>>>;
    public apiVotesGetPartyVotesByWardGet(wardId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VoteResult>>>;
    public apiVotesGetPartyVotesByWardGet(wardId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (wardId !== undefined && wardId !== null) {
            queryParameters = queryParameters.set('wardId', <any>wardId);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<VoteResult>>('get',`${this.basePath}/api/Votes/GetPartyVotesByWard`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVotesGetPartyVotesGet(observe?: 'body', reportProgress?: boolean): Observable<Array<VoteResult>>;
    public apiVotesGetPartyVotesGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VoteResult>>>;
    public apiVotesGetPartyVotesGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VoteResult>>>;
    public apiVotesGetPartyVotesGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<VoteResult>>('get',`${this.basePath}/api/Votes/GetPartyVotes`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiVotesUpdatePollingUnitVotesPost(body?: PartyVotesDto, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public apiVotesUpdatePollingUnitVotesPost(body?: PartyVotesDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public apiVotesUpdatePollingUnitVotesPost(body?: PartyVotesDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public apiVotesUpdatePollingUnitVotesPost(body?: PartyVotesDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<boolean>('post',`${this.basePath}/api/Votes/UpdatePollingUnitVotes`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
