import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fhir_json: '',
  },
  getters: {
    fhir_json: state => state.fhir_json,
  },
  mutations: {
    SET_FORM_DATA(state, payload) {
      state.fhir_json = payload;
      localStorage.setItem('fhir', JSON.stringify(state.fhir_json));
    },
    GET_FORM_DATA(state) {
      state.fhir_json = JSON.parse(localStorage.getItem('fhir'));
    },
  },
  actions: {
    setFormData({ commit }, payload) {
      const json = {
        "resourceType" : "Observation",
        "status": "final",
        "component": [
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "8480-6",
                  "display": "Systolic blood pressure"      
                }
              ]
            },
            "valueQuantity": {
              "value": payload.pressure_sys,
              "unit": "mmHg",
            }
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "8462-4",
                  "display": "Diastolic blood pressure"      
                }
              ]
            },
            "valueQuantity": {
              "value": payload.pressure_dia,
              "unit": "mmHg",
            }
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "29463-7",
                  "display": "Body weight"      
                }
              ]
            },
            "valueQuantity": {
              "value": payload.weight,
              "unit": "lb_av",
            }
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "8302-2",
                  "display": "Body height"      
                }
              ]
            },
            "valueQuantity": {
              "value": payload.height,
              "unit": "in_i",
            }
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "8867-4",
                  "display": "Heart rate"      
                }
              ]
            },
            "valueQuantity": {
              "value": payload.pulse,
              "unit": "lb_av",
            }
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "8310-5",
                  "display": "Body temperature"      
                }
              ]
            },
            "valueQuantity": {
              "value": payload.temp,
              "unit": "Cel",
            }
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "2708-6",
                  "display": "Oxygen saturation in Arterial blood"      
                }
              ]
            },
            "valueQuantity": {
              "value": payload.oxygen,
              "unit": "%",
            }
          },
          {
            "code": {
              "coding": [
                {
                  "system": "http://loinc.org",
                  "code": "15074-8",
                  "display": "Glucose [Moles/volume] in Blood"      
                }
              ]
            },
            "valueQuantity": {
              "value": payload.glucose,
              "unit": "mmol/L",
            }
          },
        ]
      }      
      commit('SET_FORM_DATA', json);
    },
  },
  modules: {

  }
})
