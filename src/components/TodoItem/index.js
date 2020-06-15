import React, { useContext } from 'react';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';
import {
  Paper,
  ListItemText,
  ListItem,
  IconButton,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import { getDataById } from '../../utils/helpers';
import { DispatchContext, TasksContext } from '../../contexts/todos';
import { removeTask } from '../../actions/actionCreator';
import TodoButton from '../TodoButton';
import useStyles from './styles';

const TodoListItem = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const tasks = useContext(TasksContext);
  const classes = useStyles();

  const task = getDataById(tasks, id);

  const onRemove = e => {
    e.preventDefault();
    dispatch(removeTask(task.id));
    history.push('/tasks');
  };

  const onEdit = e => {
    e.preventDefault();
    history.push(`${url}/edit`);
  };

  return (
    <>
      <TodoButton href="/tasks">Go back to the todo list</TodoButton>
      <Paper>
        <ListItem className={classes.listItem}>
          <ListItemText className={classes.listItemText}>{task.text}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={onRemove}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={onEdit}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Paper>
    </>
  );
};

export default TodoListItem;
