import { EpicRegistry } from '../EpicRegistry';
import { ReducerRegistry } from '../ReducerRegistry';
import { initialState } from './state';
import { actions, ActionType } from './actions';
import { reducer } from './reducer';
import { epics } from './epics';

export const todoState = { initialState, reducer, actions, ActionType, epics };

ReducerRegistry.register('todo', reducer);
epics.forEach(epic => EpicRegistry.addEpic(epic));
