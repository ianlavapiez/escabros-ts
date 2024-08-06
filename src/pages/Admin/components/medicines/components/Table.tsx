import React, { useEffect, useRef, useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Table, Tooltip } from "antd";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";

import { useAppDispatch } from "hooks/useDispatchSelector";
import {
  deleteMedicine,
  fetchMedicines,
} from "features/medicines/medicinesThunks";
import { useMedicinesSelector } from "features/medicines/medicinesSelector";
import { Medicine } from "types/medicines";
import { fireAlertWithConfirmation } from "components/sweet-alert/SweetAlert";

type DataIndex = keyof Medicine;

type MedicineTableProps = {
  onEditLinkClick: () => void;
  setData: React.Dispatch<React.SetStateAction<Medicine | null>>;
};

const MedicineTable: React.FC<MedicineTableProps> = ({
  onEditLinkClick,
  setData,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");
  const searchInput = useRef<InputRef>(null);

  const dispatch = useAppDispatch();
  const [, loading, medicines] = useMedicinesSelector();

  useEffect(() => {
    if (medicines.length <= 0) {
      dispatch(fetchMedicines());
    }
  }, [dispatch, medicines.length]);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const handleDelete = (id: string) => {
    fireAlertWithConfirmation(
      "Are you sure you want to delete the selected medicine details?",
      (confirmed) => {
        if (confirmed) {
          dispatch(deleteMedicine(id));
        } else {
          return false;
        }
      }
    );
  };

  const handleEdit = (data: Medicine) => {
    setData(data);
    onEditLinkClick();
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<Medicine> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex!]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<Medicine> = [
    {
      title: "Generic Name",
      dataIndex: "genericName",
      key: "genericName",
      width: "20%",
      ...getColumnSearchProps("genericName"),
    },
    {
      title: "Brand Name",
      dataIndex: "brandName",
      key: "brandName",
      width: "30%",
      ...getColumnSearchProps("brandName"),
    },
    {
      title: "Dose",
      dataIndex: "dose",
      key: "dose",
    },
    {
      title: "Cost Price",
      dataIndex: "costPrice",
      key: "costPrice",
    },
    {
      title: "Selling Price",
      dataIndex: "sellingPrice",
      key: "sellingPrice",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Edit">
            <Button
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
              shape="circle"
              type="primary"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record.id)}
              shape="circle"
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={medicines} loading={loading} />;
};

export default MedicineTable;
